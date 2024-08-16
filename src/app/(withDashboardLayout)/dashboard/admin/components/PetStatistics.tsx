"use client";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PieChart } from "lucide-react";
import StaticsCard from "@/app/(withDashboardLayout)/components/dashboard/StaticsCard";
import LoadingPage from "@/app/loading";
import PetAnalyticsChart from "./PetAnalyticsChart";
import PetAnalyticsPieChart from "./PetAnalyticsPieChart";

export interface IItem {
  name: string;
  value: string | number;
}
const PetStatistics = (pets: any) => {
  const [petData, setpetData] = useState(pets || []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4C4C"];
  if (!petData?.pets) {
    return <LoadingPage />; // Show a loading state while data is being fetched
  }
  const data = [
    { name: "All Pets", value: petData?.pets?.allPets || 0 },
    { name: "Dogs", value: petData?.pets?.dogs || 0 },
    { name: "Cats", value: petData?.pets?.cats || 0 },
    { name: "Rabbits", value: petData?.pets?.rabbits || 0 },
    { name: "Birds", value: petData?.pets?.birds || 0 },
    { name: "Fishes", value: petData?.pets?.fishes || 0 },
    { name: "Male", value: petData?.pets?.totalMale || 0 },
    { name: "Female", value: petData?.pets?.totalFemale || 0 },
    { name: "Small", value: petData?.pets?.totalSmall || 0 },
    { name: "Medium", value: petData?.pets?.totalMedium || 0 },
    { name: "Large", value: petData?.pets?.totalLarge || 0 },
    { name: "Extra Large", value: petData?.pets?.totalExtraLarge || 0 },
  ];
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 md:gap-4 gap-3">
        {data.map((item, index) => (
          <StaticsCard key={index} name={item?.name} value={item.value} />
        ))}
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col gap-10 mt-16">
        <div className="flex flex-col justify-center items-center w-full lg:w-[45%] md:w-[45%]">
          <h1 className="text-xl font-bold mb-3">Pet Analytics</h1>
          <PetAnalyticsChart data={data} />
        </div>
        <div className="flex flex-col justify-center items-center   w-full lg:w-[45%] md:w-[45%]">
          <h1 className="text-xl font-bold mb-3">Pet Analytics</h1>
          <PetAnalyticsPieChart data={data} />
        </div>
      </div>
    </>
  );
};

export default PetStatistics;
