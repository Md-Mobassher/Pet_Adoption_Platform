import Link from "next/link";
import { Cat } from "lucide-react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import EditProfile from "./EditProfile";
import { getCooke, logOut } from "@/app/(withCommonLayout)/actions/auth";

const ChangePasswordPage = async () => {
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
  console.log(myInfo);

  return (
    <div className="flex p-10 justify-center items-center">
      <Card className="lg:w-1/2 md:w-2/3 w-full lg:p-10 p-4">
        <CardHeader className="flex  justify-center mb-3">
          <Link className="text-center" href="/">
            <Cat className="size-8 mr-2 text-primary" />
          </Link>
          <div className="flex">
            <h3 className="font-bold text-inherit px-4 text-3xl text-primary">
              Edit Profile
            </h3>
          </div>
        </CardHeader>
        <CardBody>
          <EditProfile accessToken={accessToken} {...myInfo?.data} />
        </CardBody>
      </Card>
    </div>
  );
};

export default ChangePasswordPage;
