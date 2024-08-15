"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useRef, useState } from "react";

interface SearchPetsProps {
  onSearch: (formData: Record<string, unknown>) => void;
}

const SearchPets: React.FC<SearchPetsProps> = ({ onSearch }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    species: "",
    breed: "",
    age: "",
    location: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Filter out empty fields and convert age to number if it exists
    const filteredData: Record<string, string | number> = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
    );
    if (filteredData.age) {
      filteredData.age = Number(filteredData.age);
    }
    console.log(filteredData);

    onSearch(filteredData);

    formRef.current?.reset();
    setFormData({
      species: "",
      breed: "",
      age: "",
      location: "",
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSearch}>
      <div className=" flex flex-wrap justify-between items-center lg:pb-10 md:pb-8 pb-5 lg:gap-5 md:gap-3 gap-2 px-4 ">
        <Input
          label="Species"
          name="species"
          variant="bordered"
          color="primary"
          placeholder="Enter pet type"
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="lg:w-[21%] md:w-[21%] w-[45%]"
        />
        <Input
          label="Breed"
          name="breed"
          variant="bordered"
          color="primary"
          placeholder="Enter pet breed"
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="lg:w-[21%] md:w-[21%] w-[45%]"
        />

        <Input
          type="number"
          label="Age"
          labelPlacement="inside"
          variant="bordered"
          color="primary"
          name="age"
          placeholder="Enter an age"
          onChange={handleInputChange}
          className="lg:w-[21%] md:w-[21%] w-[45%]"
        />

        <Input
          type="text"
          label="Location"
          labelPlacement="inside"
          variant="bordered"
          color="primary"
          name="location"
          placeholder="Enter a location"
          onChange={handleInputChange}
          className="lg:w-[21%] md:w-[21%] w-[45%]"
        />

        <Button color="primary" radius="sm" size="lg" type="submit">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchPets;
