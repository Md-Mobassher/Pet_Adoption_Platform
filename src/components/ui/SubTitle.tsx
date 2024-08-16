interface ITitle {
  title: string;
}

const SubTitle = ({ title }: ITitle) => {
  return (
    <div className="max-w-3xl mx-auto lg:pb-3 md:pb-3 pb-2">
      <p className="text-lg font-semibold text-gray-600 text-center">{title}</p>
    </div>
  );
};

export default SubTitle;
