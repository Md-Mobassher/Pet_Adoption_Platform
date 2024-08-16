interface StatPorp {
  name: string;
  value: number | string;
}

const StaticsCard = ({ name: title, value }: StatPorp) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-3 hover:bg-primary hover:text-white">
      <h2 className="text-2xl font-semibold ">{title}</h2>
      <p className="text-4xl">{value || 0}</p>
    </div>
  );
};

export default StaticsCard;
