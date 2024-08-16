"use client";

import { useEffect, useState } from "react";
import { userAnalytic } from "../adminAction/user.action";
import LoadingPage from "@/app/loading";
import StaticsCard from "@/app/(withDashboardLayout)/components/dashboard/StaticsCard";
import UserAnalyticsChart from "./UserAnalyticsChart ";

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
    <div className="flex lg:flex-row md:flex-row flex-col gap-5">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-4 gap-3 lg:w-[70%] w-full">
        {data.map((item, index) => (
          <StaticsCard key={index} name={item?.name} value={item.value} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center lg:w-[29%] w-full">
        <h1 className="text-xl font-bold mb-3">User Analytics</h1>
        <UserAnalyticsChart data={data} />
      </div>
    </div>
  );
};

export default UserStatistics;
