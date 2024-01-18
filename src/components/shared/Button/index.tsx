import { ButtonProps } from "./interface";

const Button = ({ text, classes, children, disabled }: ButtonProps) => {
  return (
    <button className={classes} disabled={disabled}>
      {text}
      {children}
    </button>
  );
};

export default Button;
