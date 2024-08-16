import { getCooke, logOut } from "@/app/(withCommonLayout)/actions/auth";
import { getAnalytics } from "../admin/pet-management/components/getAnalytics";
import PetStatistics from "../admin/components/PetStatistics";

const UserDashboardPage = async () => {
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
      <div className="">
        <h1 className="text-3xl font-bold mb-6">Pet Statistics</h1>
        <PetStatistics pets={petData} />
      </div>
    </div>
  );
};

export default UserDashboardPage;
