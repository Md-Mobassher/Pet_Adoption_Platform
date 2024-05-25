"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const SearchPets = () => {
  return (
    <div className="flex justify-center items-center lg:pb-6 pb-3 lg:gap-5 md:gap-3 gap-1 px-4 lg:border-b">
      <Input
        type="text"
        label="Pet type"
        labelPlacement="inside"
        variant="bordered"
        color="primary"
      />

      <Input
        type="text"
        label="Breed"
        labelPlacement="inside"
        variant="bordered"
        color="primary"
      />

      <Input
        type="text"
        label="Age"
        labelPlacement="inside"
        variant="bordered"
        color="primary"
      />

      <Input
        type="text"
        label="Location"
        labelPlacement="inside"
        variant="bordered"
        color="primary"
      />

      <Button
        onClick={() => console.log("Hello")}
        color="primary"
        radius="sm"
        size="lg"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchPets;
