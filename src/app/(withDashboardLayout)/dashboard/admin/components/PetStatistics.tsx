"use client";
import { useState } from "react";
import { Cell, Pie, ResponsiveContainer, Tooltip } from "recharts";
import { PieChart } from "lucide-react";
import StaticsCard from "@/app/(withDashboardLayout)/components/dashboard/StaticsCard";
import LoadingPage from "@/app/loading";

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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {data.map((item, index) => (
          <StaticsCard key={index} name={item?.name} value={item.value} />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Pet Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PetStatistics;
