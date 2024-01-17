import Image from "next/image";
import loader from "../images/loader.svg";
import successImage from "../images/success.svg";
import errorImage from "../images/error.svg";
import Button from "../components/Button";

interface PropsEmailSubmitState {
  buttonStatus: string;
  isSubmitting: boolean;
}

const useEmailSubmitState = ({ buttonStatus, isSubmitting }: PropsEmailSubmitState) => {
  switch (buttonStatus) {
    case "loading":
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
          classes="px-[3.125rem] h-full font-roboto text-base font-semibold text-black bg-primary-1 whitespace-nowrap rounded-[2.5rem] hover:bg-grey-98 hover:text-primary transition-colors"
          disabled={isSubmitting}
        />
      );
  }
};
export default useEmailSubmitState;
