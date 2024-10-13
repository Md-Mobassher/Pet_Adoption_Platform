"use client";

import LoadingPage from "@/app/loading";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/divider";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { IPetData } from "@/app/(withDashboardLayout)/dashboard/admin/pet-management/components/PetsTable";
import { userInfo } from "../../actions/auth";

type IUserdata = {
  email: any;
  role: any;
  id: any;
} | null;

const PetDetails = ({ petId }: { petId: string }) => {
  const router = useRouter();
  const [petData, setPetData] = useState<IPetData>({
    id: "",
    name: "",
    species: "",
    breed: "",
    age: 0,
    image: "",
    size: "",
    gender: "",
    location: "",
    description: "",
    temperament: [],
    medicalHistory: [],
    adoptionRequirements: [],
  });
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUserdata>();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${petId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          }
        );
        const data = await res.json();
        // console.log(data);
        const userdata = await userInfo();
        setUser(userdata as any);
        setPetData(data?.data);
      } catch (error) {
        console.error("Error fetching pet data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [petId, router]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Card className="px-2 py-5 lg:p-8 md:p-6 mx-4 mb-5">
      <CardBody>
        {petData?.image && (
          <div className="lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] mx-auto flex">
            <Image
              src={petData?.image}
              alt={`${petData?.name} image`}
              className="rounded-lg mx-auto"
              width={500}
              height={500}
            />
          </div>
        )}
        <Divider className="my-4" />
        <div className="flex justify-between items-start">
          <div>
            <h2 className=" text-2xl font-bold text-primary">
              Name: {petData?.name}
            </h2>
            <p className="mt-1">Species: {petData?.species}</p>
            <p className="mt-1">Breed: {petData?.breed}</p>
            <p className="mt-1">Description: {petData?.description}</p>
          </div>
          <div>
            {user && user?.role === "USER" && (
              <Link href={`/dashboard/adoption-request/${petData?.id}`}>
                <Button
                  color="primary"
                  variant="solid"
                  radius="sm"
                  className="hover:bg-primary hover:text-white"
                  size="md"
                >
                  Adoption Request
                </Button>
              </Link>
            )}
          </div>
        </div>
        <Divider className="my-4" />
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Details</h3>
            <p>Age: {petData?.age}</p>
            <p>Size: {petData?.size}</p>
            <p>Gender: {petData?.gender}</p>
            <p>Current location: {petData?.location}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Temperament</h3>
            <ul>
              {petData?.temperament.map((trait, index) => (
                <li key={index} className="flex gap-3 mt-2">
                  <ArrowRightIcon /> {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Divider className="my-4" />
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-4">
          <div>
            <h3 className="text-xl font-semibold">Medical History</h3>
            <ul>
              {petData?.medicalHistory.map((history, index) => (
                <li key={index} className="flex gap-3 mt-2">
                  <ArrowRightIcon /> {history}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold lg:mt-0 md:mt-0 mt-2">
              Adoption Requirements
            </h3>
            <ul>
              {petData?.adoptionRequirements.map((requirement, index) => (
                <li key={index} className="flex gap-3 mt-2">
                  <ArrowRightIcon /> {requirement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PetDetails;
