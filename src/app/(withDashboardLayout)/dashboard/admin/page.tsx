import { getCooke, logOut } from "@/app/(withCommonLayout)/actions/auth";
import PetStatistics from "./components/PetStatistics";
import UserStatistics from "./components/UserStatistics";
import { getAnalytics } from "./pet-management/components/getAnalytics";
import UserAnalyticsChart from "./components/UserAnalyticsChart ";

const AdminDashboardPage = async () => {
  const accessToken = await getCooke("accessToken");

  if (!accessToken) {
    return logOut();
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`, {
    headers: {
      Authorization: `${accessToken}` || "",
    },
    cache: "no-store",
  });

  const { data } = await res.json();
  const petData = getAnalytics(data);

  return (
    <div className="p-8 bg-content1 min-h-screen">
      <div className="mb-20">
        <h1 className="text-3xl font-bold mb-6">User Statistics</h1>
        <UserStatistics />
      </div>
      <div className="my-20">
        <h1 className="text-3xl font-bold mb-6">Pet Statistics</h1>
        <PetStatistics pets={petData} />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
