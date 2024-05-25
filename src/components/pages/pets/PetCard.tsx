import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

const PetCard = ({
  image,
  name,
  description,
  age,
  breed,
  location,
  species,
  id,
}: any) => {
  return (
    <Card className=" border  hover:shadow-2xl hover:border-primary">
      <div className="h-80 w-full flex border-b">
        <Image src={image} alt="pet image" width={600} height={350} />
      </div>
      <CardBody className="p-4">
        <div className="flex flex-wrap justify-between">
          <h2 className="text-xl text-primary font-bold mb-2 ">{name}</h2>
          <p className="font-semibold ">
            <span className="font-semibold">Species:</span> {species}{" "}
          </p>
        </div>
        <p className="text-md text-justify">{description} </p>

        <div className="flex flex-wrap justify-between my-1 text-md">
          <p className="font-semibold ">
            <span className="font-semibold">Age:</span> {age}{" "}
          </p>
          <p className="font-semibold ">
            <span className="font-semibold">Breed:</span> {breed}{" "}
          </p>
        </div>

        <div className="flex justify-between items-start lg:gap-3 md:gap-3 gap-5  mt-3 text-md">
          <p className="font-semibold ">
            <span className="font-semibold">Location:</span> {location}{" "}
          </p>
          <Link href={`/pets/${id}`}>
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
  );
};

export default PetCard;
