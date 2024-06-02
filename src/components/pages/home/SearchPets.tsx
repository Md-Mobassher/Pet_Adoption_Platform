"use client";

import {
  petBreeds,
  petSpecies,
  Species,
} from "@/app/(withDashboardLayout)/dashboard/admin/pet-management/components/pet.data";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useRef, useState } from "react";

interface SearchPetsProps {
  onSearch: (formData: Record<string, unknown>) => void;
}

const SearchPets: React.FC<SearchPetsProps> = ({ onSearch }) => {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | "">("");
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
    setSelectedSpecies("");
  };

  return (
    <form ref={formRef} onSubmit={handleSearch}>
      <div className="flex  justify-center items-center lg:pb-6 pb-3 lg:gap-5 md:gap-3 gap-1 px-4 lg:border-b">
        <Select
          label="Species"
          name="species"
          variant="bordered"
          color="primary"
          placeholder="Select a pet type"
          onChange={(e) => {
            handleInputChange(e);
            setSelectedSpecies(e.target.value as Species);
          }}
        >
          {petSpecies.map((specie) => (
            <SelectItem key={specie.value} value={specie.value}>
              {specie.label}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Breed"
          name="breed"
          variant="bordered"
          color="primary"
          placeholder="Select a pet Breed"
          onChange={handleInputChange}
        >
          {selectedSpecies
            ? petBreeds[selectedSpecies].map((breed) => (
                <SelectItem key={breed.value} value={breed.value}>
                  {breed.label}
                </SelectItem>
              ))
            : petBreeds?.Dog?.map((breed) => (
                <SelectItem key={breed.value} value={breed.value}>
                  {breed.label}
                </SelectItem>
              ))}
        </Select>

        <Input
          type="number"
          label="Age"
          labelPlacement="inside"
          variant="bordered"
          color="primary"
          name="age"
          placeholder="Enter an age"
          onChange={handleInputChange}
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
        />

        <Button color="primary" radius="sm" size="lg" type="submit">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchPets;
