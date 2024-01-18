import { TitleProps } from "./interface";

const Text = ({ text, tag, classes }: TitleProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return <Tag className={classes}>{text}</Tag>;
};

export default Text;
