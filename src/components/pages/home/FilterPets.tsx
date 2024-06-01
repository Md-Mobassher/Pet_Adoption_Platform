"use client";

import {
  adoptionRequirementss,
  medicalHistories,
  petGenders,
  petSizes,
  temperaments,
} from "@/app/(withDashboardLayout)/dashboard/admin/pet-management/components/pet.data";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useRef, useState } from "react";

interface FilterPetsProps {
  onFilter: (formData: Record<string, unknown>) => void;
}

const FilterPets: React.FC<FilterPetsProps> = ({ onFilter }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    size: "",
    gender: "",
    medicalHistory: [],
    temperament: [],
    adoptionRequirements: [],
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleApplyFilters = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();

    const filteredData: Record<string, string | string[]> = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
    );

    console.log(filteredData);
    onFilter(filteredData);

    formRef.current?.reset();
    setFormData({
      size: "",
      gender: "",
      medicalHistory: [],
      temperament: [],
      adoptionRequirements: [],
    });
  };

  return (
    <div className="pr-3 lg:w-1/5 border-r">
      <h2 className="text-2xl font-semibold lg:mb-4 my-2 ml-2">Filters</h2>
      <form ref={formRef} onSubmit={handleApplyFilters}>
        <div className="mb-4 flex lg:flex-col gap-3">
          <Select
            label="Size"
            name="size"
            variant="bordered"
            color="primary"
            placeholder="Select a pet size"
            onChange={handleFilterChange}
          >
            {petSizes.map((size) => (
              <SelectItem key={size.value} value={size.value}>
                {size.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Gender"
            placeholder="Select a gender"
            variant="bordered"
            color="primary"
            onChange={handleFilterChange}
          >
            {petGenders.map((gender) => (
              <SelectItem key={gender.value} value={gender.value}>
                {gender.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            name="medicalHistory"
            label="Medical History"
            variant="bordered"
            color="primary"
            selectionMode="multiple"
            placeholder="Select a Medical History"
            onChange={handleFilterChange}
          >
            {medicalHistories.map((history) => (
              <SelectItem key={history.value} value={history.value}>
                {history.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            name="temperament"
            label="Temperament"
            variant="bordered"
            color="primary"
            selectionMode="multiple"
            placeholder="Select a Temperament"
            onChange={handleFilterChange}
          >
            {temperaments.map((temperament) => (
              <SelectItem key={temperament.value} value={temperament.value}>
                {temperament.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Adoption Requirements"
            name="adoptionRequirements"
            variant="bordered"
            color="primary"
            selectionMode="multiple"
            placeholder="Select a Requirements"
            onChange={handleFilterChange}
          >
            {adoptionRequirementss.map((requirement) => (
              <SelectItem key={requirement.value} value={requirement.value}>
                {requirement.label}
              </SelectItem>
            ))}
          </Select>

          <Button
            color="primary"
            radius="sm"
            size="md"
            type="submit"
            fullWidth
            className="mt-4"
          >
            Set Filter
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FilterPets;
