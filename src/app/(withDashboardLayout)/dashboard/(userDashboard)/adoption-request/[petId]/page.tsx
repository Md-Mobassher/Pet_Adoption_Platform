import { getCooke, logOut } from "@/app/(withCommonLayout)/actions/auth";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Cat } from "lucide-react";
import Link from "next/link";
import AdoptionRequestForm from "./AdoptionRequestForm";

type TPetIdParams = {
  params: {
    petId: string;
  };
};
const AdoptionRequestPage = async ({ params }: TPetIdParams) => {
  const accessToken = await getCooke("accessToken");
  if (!accessToken) {
    return logOut();
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/users/profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      cache: "no-store",
    }
  );

  const myInfo = await res.json();

  return (
    <div className="flex p-10 justify-center items-center">
      <Card className="lg:w-1/2 md:w-2/3 w-full lg:p-10 p-4">
        <CardHeader className="flex  justify-center ">
          <Link className="text-center" href="/">
            <Cat className="size-8 mr-2 text-primary" />
          </Link>
          <div className="flex">
            <h3 className="font-bold text-inherit px-4 text-3xl text-primary">
              Adoption <span className="text-black"> Request</span>
            </h3>
          </div>
        </CardHeader>
        <CardBody>
          <AdoptionRequestForm
            accessToken={accessToken}
            {...myInfo?.data}
            petId={params.petId}
          />
        </CardBody>
      </Card>
    </div>
  );
};
export default AdoptionRequestPage;
