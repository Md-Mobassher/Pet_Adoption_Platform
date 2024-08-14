interface ITitle {
  title: string;
}

const SubTitle = ({ title }: ITitle) => {
  return (
    <div className="max-w-4xl mx-auto py-3">
      <p className="text-lg font-semibold text-gray-600 text-center">{title}</p>
    </div>
  );
};

export default SubTitle;
