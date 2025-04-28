interface StatPorp {
  name: string;
  value: number | string;
}

const StaticsCard = ({ name: title, value }: StatPorp) => {
  return (
    <div className="bg-white lg:p-3 md:p-3 p-2 rounded-lg shadow-md flex flex-col items-center justify-evenly lg:gap-2 md:gap-2 gap-1 hover:bg-primary transition-all duration-300 hover:text-white border border-gray-300">
      <h2 className="lg:text-2xl md:text-2xl text-xl font-semibold text-center">
        {title}
      </h2>
      <p className="lg:text-4xl md:text=4xl text-3xl text-center">
        {value || 0}
      </p>
    </div>
  );
};

export default StaticsCard;
