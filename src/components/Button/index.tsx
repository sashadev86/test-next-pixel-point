import { ButtonProps } from "./interface"

const Button = ({text, classes}: ButtonProps) => {
  return (
    <button className={classes}>{text}</button>
  )
}

export default Button