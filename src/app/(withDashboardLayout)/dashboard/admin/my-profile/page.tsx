import { getCooke, logOut } from "@/app/(withCommonLayout)/actions/auth";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import EditProfileButton from "./EditProfileButton";
import Image from "next/image";

const AdminProfilePage = async () => {
  const accessToken = await getCooke("accessToken");

  if (!accessToken) {
    return logOut();
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/users/profile`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      cache: "no-store",
    }
  );
  const myInfo = await res.json();

  return (
    <div className="lg:p-7 md:p-6 p-4">
      <h3 className="font-bold text-inherit px-4 text-3xl text-center">
        My <span className="text-primary">Profile</span>
      </h3>

      <div className="lg:my-10 my-5 max-w-4xl mx-auto">
        <Card className=" border border-gray-300 lg:px-10 lg:py-10 hover:shadow-2xl hover:border-primary max-w-4xl mx-auto">
          {/* <div className="h-80 w-full flex border-b">
            <Image src={""} alt="pet image" width={600} height={350} />
          </div> */}
          <CardBody className="p-4">
            <div className="">
              <h2 className="text-xl font-bold mb-3 ">
                Name:{" "}
                <span className="text-primary ml-2"> {myInfo?.data?.name}</span>
              </h2>
              <h2 className="text-xl font-bold mb-3 ">
                Email:{" "}
                <span className="text-primary ml-2">
                  {" "}
                  {myInfo?.data?.email}
                </span>
              </h2>
              <h2 className="text-xl font-bold">
                Role:{" "}
                <span className="text-primary ml-2"> {myInfo?.data?.role}</span>
              </h2>
            </div>
          </CardBody>
          <CardFooter>
            <EditProfileButton />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminProfilePage;
