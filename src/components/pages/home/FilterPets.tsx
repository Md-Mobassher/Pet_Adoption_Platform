"use client";

import { animals } from "@/data/animals"; // Assuming you have this data
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";

const FilterPets = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    size: [],
    gender: [],
    specialNeeds: [],
  });

  const handleFilterChange = (name, values) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: values,
    }));
  };

  const handleApplyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="pr-3 lg:w-1/5 border-r">
      <h2 className="text-2xl font-semibold lg:mb-4 my-2 ml-2">Filters</h2>
      <div className="mb-4 flex lg:flex-col gap-2">
        <Select
          label="Size"
          placeholder="Select an animal"
          selectionMode="multiple"
          fullWidth
          onSelectionChange={(values) => handleFilterChange("size", values)}
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
          onSelectionChange={(values) => handleFilterChange("gender", values)}
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
          onSelectionChange={(values) =>
            handleFilterChange("specialNeeds", values)
          }
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Button
          onClick={handleApplyFilters}
          color="primary"
          radius="sm"
          size="lg"
        >
          Set Filter
        </Button>
      </div>
    </div>
  );
};

export default FilterPets;
