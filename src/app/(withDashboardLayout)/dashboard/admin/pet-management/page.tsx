import AddPet from "./components/AddPet";
import PetsTable from "./components/PetsTable";
import UsersTable from "./components/PetsTable";
import { getCooke, logOut } from "@/app/(withCommonLayout)/actions/auth";

const PetMangementPage = async () => {
  const accessToken = await getCooke("accessToken");

  if (!accessToken) {
    return logOut();
  }
  const res = await fetch(`${process.env.serverUrl}/pets`, {
    headers: {
      Authorization: `${accessToken}` || "",
    },
    cache: "no-store",
  });

  const { data } = await res.json();
  // console.log(data);

  return (
    <div>
      <div className="mt-5 mb-7">
        <h3 className="font-bold text-inherit px-4 text-3xl text-center">
          <span className="text-primary">User</span> Management
        </h3>
      </div>
      <AddPet />
      {data && <PetsTable data={data}></PetsTable>}
    </div>
  );
};

export default PetMangementPage;