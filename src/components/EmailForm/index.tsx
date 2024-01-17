"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import background from "../../images/email-form.svg";
import { IEmailForm } from "./interface";
import { schema } from "./validation";
import useEmailSubmitState from "@/src/hooks/useEmailSubmitState";
import { sendEmail } from "@/src/api/emailAPI";

export default function EmailForm() {
  const [buttonStatus, setButtonStatus] = useState<string>("default");
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
      await sendEmail(data);

      setButtonStatus("success");
      setTimeout(() => {
        setButtonStatus("default");
      }, 3000);
    } catch (error) {
      setErrorMessage("Oops! Something went wrong");
      setButtonStatus("error");
      setTimeout(() => {
        setButtonStatus("default");
        setErrorMessage("");
      }, 3000);
    } finally {
      reset();
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
        className={`pl-[1.625rem] w-full font-roboto text-base font-light text-white opacity-80 bg-[transparent] outline-none placeholder:font-roboto placeholder:text-base placeholder:font-light placeholder:tracking-[.02rem] form-input ${
          errorMessage ? "placeholder:opacity-0" : ""
        }`}
        placeholder="Your business email..."
        disabled={isSubmitting}
        autoComplete="off"
      />

      {useEmailSubmitState({buttonStatus, isSubmitting})}

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