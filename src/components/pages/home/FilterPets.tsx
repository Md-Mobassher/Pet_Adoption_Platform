"use client";
import { animals } from "@/data/animals";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";

const FilterPets = () => {
  return (
    <div className=" pr-3 lg:w-1/5 border-r">
      <h2 className="text-2xl font-semibold lg:mb-4 my-2 ml-2">Filters</h2>
      <div className="mb-4 flex lg:flex-col gap-2">
        <Select
          label="Size"
          placeholder="Select an animal"
          selectionMode="multiple"
          fullWidth
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Gender"
          placeholder="Select an animal"
          selectionMode="multiple"
          fullWidth
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Special needs"
          placeholder="Select an animal"
          selectionMode="multiple"
          fullWidth
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Button
          onClick={() => console.log("Hello")}
          color="primary"
          radius="sm"
          size="lg"
        >
          Set Filter{" "}
        </Button>
      </div>
    </div>
  );
};

export default FilterPets;
