interface ITitle {
  title: string;
}

const SubTitle = ({ title }: ITitle) => {
  return (
    <div className="max-w-4xl mx-auto lg:py-3 md:py-3 py-2">
      <p className="text-lg font-semibold text-gray-600 text-center">{title}</p>
    </div>
  );
};

export default SubTitle;
