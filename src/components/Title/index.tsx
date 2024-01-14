interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => {
  return <h1>{text}</h1>;
};

export default Title;
