interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  return (
    <h1 className="lg:text-5xl md:text-4xl text-3xl  text-center font-bold mb-5 text-default-800 ">
      {title}
    </h1>
  );
};

export default Title;
