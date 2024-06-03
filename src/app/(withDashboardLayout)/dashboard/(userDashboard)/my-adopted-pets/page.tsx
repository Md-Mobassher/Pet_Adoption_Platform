import { logOut } from "@/app/(withCommonLayout)/actions/auth";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyAdoptedPetsPage = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    return logOut();
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-requests`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
      cache: "no-store",
    }
  );

  const adoptedPets = await res.json();

  return (
    <div className="my-4">
      <div className="">
        <h3 className="font-bold text-inherit px-4 text-3xl text-center">
          My <span className="text-primary">Adopted Pets</span>
        </h3>
      </div>
      <div>
        {adoptedPets?.data?.length === 0 && (
          <div className="h-60 w-full flex justify-center items-center">
            <p className="text-red-500 text-xl text-center font-semibold">
              No Adopted Pets found.
            </p>
          </div>
        )}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-7 gap-5 mx-auto">
        {adoptedPets?.data?.length > 0 &&
          adoptedPets?.data?.map((adoptedpet: any) => (
            <div key={adoptedpet.id} className="mx-auto">
              <Card className=" border shadow-xl  hover:shadow-2xl hover:border-primary max-w-sm">
                <div className="h-80 w-full flex border-b">
                  <Image
                    src={adoptedpet?.pet?.image}
                    alt="pet image"
                    width={600}
                    height={350}
                  />
                </div>
                <CardBody className="p-4">
                  <div className="flex flex-wrap justify-between">
                    <h2 className="text-xl text-primary font-bold mb-2 ">
                      {adoptedpet?.pet?.name}
                    </h2>
                    <p className="font-semibold ">
                      <span className="font-semibold">Status:</span>{" "}
                      {adoptedpet?.status === "PENDING" && (
                        <span className="bg-red-500 px-3 py-1 text-white rounded-md">
                          PENDING
                        </span>
                      )}
                      {adoptedpet.status === "APPROVED" && (
                        <span className="bg-green-500 px-3 py-1 text-white rounded-md">
                          APPROVED
                        </span>
                      )}
                      {adoptedpet.status === "REJECTED" && (
                        <span className="bg-gray-500 px-3 py-1 text-white rounded-md">
                          REJECTED
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-between  text-md gap-5">
                    <p className="font-semibold ">
                      <span className="font-semibold">Age:</span>{" "}
                      {adoptedpet?.pet?.age}{" "}
                    </p>
                    <p className="font-semibold ">
                      <span className="font-semibold">Breed:</span>{" "}
                      {adoptedpet?.pet?.breed}{" "}
                    </p>
                    <p className="font-semibold ">
                      <span className="font-semibold">Species:</span>{" "}
                      {adoptedpet?.pet?.species}
                    </p>
                  </div>

                  <div className="flex justify-between items-start lg:gap-3 md:gap-3 gap-5  mt-3 text-md">
                    <p className="font-semibold ">
                      <span className="font-semibold">Location:</span>{" "}
                      {adoptedpet?.pet?.location}{" "}
                    </p>
                    <Link href={`/pets/${adoptedpet.petId}`}>
                      <Button
                        color="primary"
                        variant="bordered"
                        radius="sm"
                        className="hover:bg-primary hover:text-white"
                        size="md"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyAdoptedPetsPage;
