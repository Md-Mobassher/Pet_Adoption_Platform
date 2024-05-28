"use client";

import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import React, { useState, useRef, createRef, useEffect } from "react";
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
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { creteAPet } from "../../adminAction/pet.action";
import { toast } from "sonner";

export default function AddPetForm({ onClose }: any) {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | "">("");
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(creteAPet, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state?.message, { id: 1, duration: 2000 });
      ref.current!.reset();
      onclose();
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  }, [state, ref, onClose]);

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
          />
          <Select
            label="Species"
            name="species"
            variant="bordered"
            color="primary"
            required
            onChange={(e) => setSelectedSpecies(e.target.value as Species)}
          >
            {petSpecies.map((species) => (
              <SelectItem key={species.value} value={species.value}>
                {species.label}
              </SelectItem>
            ))}
          </Select>
          {selectedSpecies ? (
            <Select
              label="Breed"
              name="breed"
              variant="bordered"
              color="primary"
              required
              disabledKeys={selectedSpecies}
            >
              {petBreeds[selectedSpecies].map((breed) => (
                <SelectItem key={breed.value} value={breed.value}>
                  {breed.label}
                </SelectItem>
              ))}
            </Select>
          ) : (
            <Select
              label="Breed"
              name="breed"
              variant="bordered"
              color="primary"
              required
              disabledKeys={selectedSpecies}
            >
              {petBreeds.dog.map((breed) => (
                <SelectItem key={breed.value} value={breed.value}>
                  {breed.label}
                </SelectItem>
              ))}
            </Select>
          )}
          <Input
            required
            name="age"
            type="number"
            label="Age"
            variant="bordered"
            color="primary"
          />

          <Select
            label="Size"
            name="size"
            variant="bordered"
            color="primary"
            required
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
          />
          <Input
            required
            name="description"
            label="Description"
            variant="bordered"
            color="primary"
          />

          <Select
            name="medicalHistory"
            label="Medical History"
            variant="bordered"
            color="primary"
            required
            selectionMode="multiple"
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
            required
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
          />
        </div>
        <div className="">
          <Button color="primary" fullWidth type="submit">
            Add Pet
          </Button>
        </div>
      </form>
    </div>
  );
}
