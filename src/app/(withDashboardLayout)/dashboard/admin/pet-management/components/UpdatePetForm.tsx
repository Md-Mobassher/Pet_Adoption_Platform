"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { createRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { updateUserStatus } from "../../adminAction/user.action";
import { Input } from "@nextui-org/input";
import {
  adoptionRequirements,
  medicalHistories,
  petBreeds,
  petSizes,
  petSpecies,
  Species,
  temperaments,
} from "./pet.data";
import { Button } from "@nextui-org/button";
import { updatePet } from "../../adminAction/pet.action";

export default function UpdatePetForm({ onClose, data }: any) {
  const {
    id,
    name,
    species,
    breed,
    size,
    age,
    location,
    adoptionRequirement,
    temperament,
    description,
    image,
    medicalHistory,
  } = data;

  const [selectedSpecies, setSelectedSpecies] = useState<Species | "">(species);
  const [formData, setFormData] = useState({
    name,
    species,
    breed,
    size,
    age,
    location,
    description,
    adoptionRequirement,
    temperament,
    medicalHistory,
    image,
  });

  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(updatePet.bind(null, id), null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state.message, { id: 1, duration: 2000 });
      onClose();
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  }, [state, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string | string[]) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="m-3 p-5">
      <form className="space-y-3" ref={ref} action={formAction}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <Input
            required
            name="name"
            type="text"
            label="Name"
            variant="bordered"
            color="primary"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Select
            label="Species"
            name="species"
            variant="bordered"
            color="primary"
            required
            value={formData.species}
            onChange={(value) => {
              handleSelectChange("species", value as string);
              setSelectedSpecies(value as Species);
            }}
          >
            {petSpecies.map((species) => (
              <SelectItem key={species.value} value={species.value}>
                {species.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Breed"
            name="breed"
            variant="bordered"
            color="primary"
            required
            value={formData.breed}
            onChange={(value) => handleSelectChange("breed", value as string)}
          >
            {petBreeds[selectedSpecies || "dog"].map((breed) => (
              <SelectItem key={breed.value} value={breed.value}>
                {breed.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            required
            name="age"
            type="number"
            label="Age"
            variant="bordered"
            color="primary"
            value={formData.age}
            onChange={handleInputChange}
          />
          <Select
            label="Size"
            name="size"
            variant="bordered"
            color="primary"
            required
            value={formData.size}
            onChange={(value) => handleSelectChange("size", value as string)}
          >
            {petSizes.map((size) => (
              <SelectItem key={size.value} value={size.value}>
                {size.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            required
            name="location"
            type="text"
            label="Location"
            variant="bordered"
            color="primary"
            value={formData.location}
            onChange={handleInputChange}
          />
          <Input
            required
            name="description"
            label="Description"
            variant="bordered"
            color="primary"
            value={formData.description}
            onChange={handleInputChange}
          />
          <Select
            name="medicalHistory"
            label="Medical History"
            variant="bordered"
            color="primary"
            required
            selectionMode="multiple"
            value={formData.medicalHistory}
            onChange={(value) =>
              handleSelectChange("medicalHistory", value as string[])
            }
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
            required
            selectionMode="multiple"
            value={formData.temperament}
            onChange={(value) =>
              handleSelectChange("temperament", value as string[])
            }
          >
            {temperaments.map((temperament) => (
              <SelectItem key={temperament.value} value={temperament.value}>
                {temperament.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Adoption Requirements"
            name="adoptionRequirement"
            variant="bordered"
            color="primary"
            selectionMode="multiple"
            required
            value={formData.adoptionRequirement}
            onChange={(value) =>
              handleSelectChange("adoptionRequirement", value as string[])
            }
          >
            {adoptionRequirements.map((requirement) => (
              <SelectItem key={requirement.value} value={requirement.value}>
                {requirement.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            required
            name="image"
            type="file"
            label="Image URL"
            variant="bordered"
            color="primary"
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <Button color="primary" fullWidth type="submit">
            Edit Pet
          </Button>
        </div>
      </form>
    </div>
  );
}
