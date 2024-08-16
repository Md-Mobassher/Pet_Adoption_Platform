"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { userAnalytic } from "../adminAction/user.action";
import LoadingPage from "@/app/loading";
import StaticsCard from "@/app/(withDashboardLayout)/components/dashboard/StaticsCard";
interface UserData {
  allUsers: number;
  totalAdmins: number;
  totalUsers: number;
  totalActiveUsers: number;
  totalDeletedUsers: number;
  totalDeactiveUsers: number;
}
const UserStatistics = () => {
  const [userData, setUserData] = useState<UserData | null>(null); // Explicitly type state
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4C4C"];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await userAnalytic();
        setUserData(data?.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <LoadingPage />; // Show a loading state while data is being fetched
  }

  const data = [
    { name: "All Users", value: userData.allUsers },
    { name: "Admins", value: userData.totalAdmins },
    { name: "Users", value: userData.totalUsers },
    { name: "Active Users", value: userData.totalActiveUsers },
    { name: "Deleted Users", value: userData.totalDeletedUsers },
    { name: "Deactivated Users", value: userData.totalDeactiveUsers },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <StaticsCard key={index} name={item?.name} value={item.value} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">User Distribution</h2>
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
              {data.map((entry, index) => (
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

export default UserStatistics;
