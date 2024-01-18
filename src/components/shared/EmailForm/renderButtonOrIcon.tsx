import Image from "next/image";
import loader from "../../../images/loader.svg";
import successImage from "../../../images/success.svg";
import errorImage from "../../../images/error.svg";
import Button from "../Button";

interface PropsRenderButtonOrIcon {
  buttonStatus: string;
  isSubmitting: boolean;
}

export enum StatusIcon {
  Loader = "LOADER",
  Success = "SUCCESS",
  Error = "ERROR",
}

const renderButtonOrIcon = ({
  buttonStatus,
  isSubmitting,
}: PropsRenderButtonOrIcon) => {
  switch (buttonStatus) {
    case StatusIcon.Loader:
      return (
        <div className="max-w-12 w-full h-12 flex items-center justify-center bg-primary-1 rounded-full animate-spin">
          <Image
            className="z-1"
            src={loader}
            width={30}
            height={30}
            alt="loader"
          />
        </div>
      );
    case StatusIcon.Success:
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
    case StatusIcon.Error:
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
          classes="px-[3.125rem] h-full font-roboto text-base font-semibold text-black bg-primary-1 whitespace-nowrap rounded-[2.5rem] hover:bg-grey-98 hover:text-primary-1 transition-colors"
          disabled={isSubmitting}
        />
      );
  }
};
export default renderButtonOrIcon;
