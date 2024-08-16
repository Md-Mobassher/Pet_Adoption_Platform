import UsersTable from "./components/UsersTable";
import { getCooke, logOut } from "@/app/(withCommonLayout)/actions/auth";

const UserMangementPage = async () => {
  const accessToken = await getCooke("accessToken");

  if (!accessToken) {
    return logOut();
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, {
    headers: {
      Authorization: `${accessToken}` || "",
    },
    cache: "no-store",
  });

  const { data } = await res.json();
  // console.log(data);

  return (
    <div className="lg:p-7 md:p-6 p-4">
      <div className="mb-7">
        <h3 className="font-bold text-inherit px-4 text-3xl text-center">
          <span className="text-primary">User</span> Management
        </h3>
      </div>
      {data && <UsersTable data={data}></UsersTable>}{" "}
    </div>
  );
};

export default UserMangementPage;
