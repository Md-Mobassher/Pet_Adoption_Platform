"use client";
import { animals } from "@/data/animals";
import { Select, SelectItem } from "@nextui-org/select";

const FilterPets = () => {
  return (
    <div className="bg-white p-4 rounded shadow-lg lg:w-1/4">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <Select
          label="Size"
          placeholder="Select an animal"
          selectionMode="multiple"
          className="max-w-xs"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="mb-4">
        <Select
          label="Gender"
          placeholder="Select an animal"
          selectionMode="multiple"
          className="max-w-xs"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="mb-4">
        <Select
          label="Special needs"
          placeholder="Select an animal"
          selectionMode="multiple"
          className="max-w-xs"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default FilterPets;
