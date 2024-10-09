import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

const PetCard = ({ id, image, name, species, age, breed, location }: any) => {
  return (
    <Card className="relative group min-w-sm w-full h-80 overflow-hidden rounded-lg border border-gray-300 hover:border-primary">
      {/* Pet Image */}
      <div className="h-full w-full ">
        <Image
          src={image}
          alt="pet image"
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 object-fill bg-slate-50"
          width={600}
          height={500}
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-5 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="font-semibold mb-1">
          <span className="font-semibold">Species:</span> {species}
        </p>

        <p className="font-semibold mb-1">
          <span className="font-semibold">Age:</span> {age}
        </p>
        <p className="font-semibold mb-1">
          <span className="font-semibold">Breed:</span> {breed}
        </p>

        <p className="font-semibold mb-4">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <Link href={`/pets/${id}`}>
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            className="bg-primary-50 hover:bg-primary hover:text-white"
            size="md"
          >
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default PetCard;
