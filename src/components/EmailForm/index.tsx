"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import Button from "../Button";
import background from "../../images/email-form.svg";
import loader from "../../images/loader.svg";
import successImage from "../../images/success.svg";
import errorImage from "../../images/error.svg";

interface IEmailForm {
  email: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Incorrect email format")
      .required("Email is a required field"),
  })
  .required();

export default function EmailForm() {
  const [buttonStatus, setButtonStatus] = useState("default");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IEmailForm> = async (data) => {
    setButtonStatus("loading");
    try {
      const response = await fetch(
        "https://mytest.free.beeceptor.com/777send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        }
      );

      if (!response.ok) {
        throw new Error("Email sending failed");
      }

      setButtonStatus("success");
      setTimeout(() => {
        setButtonStatus("default");
      }, 5000);
    } catch (error) {
      setErrorMessage("Oops! Something went wrong");
      setButtonStatus("error");
      setTimeout(() => {
        setButtonStatus("default");
        setErrorMessage("");
      }, 5000);
    } finally {
      reset();
    }
  };

  const renderButtonOrIcon = () => {
    switch (buttonStatus) {
      case "loading":
        return (
          <div className="max-w-12 w-full h-12 flex items-center justify-center bg-primary rounded-full animate-spin">
            <Image
              className="z-1"
              src={loader}
              width={30}
              height={30}
              alt="loader"
            />
          </div>
        );
      case "success":
        return (
          <div className="max-w-12 w-full h-12 flex items-center justify-center">
            <Image
              className=""
              src={successImage}
              width={48}
              height={48}
              alt="success icon"
            />
          </div>
        );
      case "error":
        return (
          <div className="max-w-12 w-full h-12 flex items-center justify-center">
            <Image
              className=""
              src={errorImage}
              width={48}
              height={48}
              alt="error icon"
            />
          </div>
        );

      default:
        return (
          <Button
            text="Free Trial"
            classes="px-12 h-full font-roboto text-base font-semibold text-black bg-primary whitespace-nowrap rounded-[2.5rem] hover:bg-grey-98 hover:text-primary transition-colors"
            disabled={isSubmitting}
          />
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-1.5 relative max-w-[31.5rem] h-[3.75rem] flex items-center gap-x-1.5 border border-solid border-london-hue rounded-[2.5rem]"
    >

      <Image
        className="absolute top-0 left-0 w-full bg-custom-gradient mix-blend-overlay rounded-[2.5rem] z-[-1]"
        src={background}
        alt="background form"
      />

      <input
        type="email"
        {...register("email")}
        className={`pl-[1.625rem] w-full font-roboto text-base font-light text-white opacity-80 bg-[transparent] outline-none placeholder:font-roboto placeholder:text-base placeholder:font-light form__input ${
          errorMessage ? "placeholder:opacity-0" : ""
        }`}
        placeholder="Your business email..."
        disabled={isSubmitting}
        autoComplete="off"
      />

      {renderButtonOrIcon()}

      {errors.email && (
        <span className="pl-8 absolute left-0 bottom-[-1.875rem] text-error">
          {errors.email.message}
        </span>
      )}

      {errorMessage && (
        <span className="pl-8 absolute left-0 opacity-80 font-roboto text-base text-white font-light">
          {errorMessage}
        </span>
      )}
    </form>
  );
}
