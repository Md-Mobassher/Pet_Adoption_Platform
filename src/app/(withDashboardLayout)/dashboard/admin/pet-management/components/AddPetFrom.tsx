"use client";

import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import React, { useState, createRef, useEffect } from "react";
import {
  adoptionRequirementss,
  medicalHistories,
  petBreeds,
  petGenders,
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
import { uploadImageToImgBB } from "../../../../../../../utils/uploadImageToImgBB";

export default function AddPetForm({ onClose }: any) {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | "">("");
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(creteAPet, null);

  useEffect(() => {
    // console.log(state);
    if (state && state?.success) {
      toast.success(state.message, { id: 1, duration: 3000 });
      onClose();
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 3000 });
    }
  }, [state, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObject: { [key: string]: any } = {};

    new FormData(e.currentTarget).forEach((value, key) => {
      if (formDataObject[key]) {
        if (Array.isArray(formDataObject[key])) {
          formDataObject[key].push(value);
        } else {
          formDataObject[key] = [formDataObject[key], value];
        }
      } else {
        formDataObject[key] = value;
      }
    });

    if (typeof formDataObject.medicalHistory === "string") {
      formDataObject.medicalHistory = [formDataObject.medicalHistory];
    } else if (!Array.isArray(formDataObject.medicalHistory)) {
      formDataObject.medicalHistory = [];
    }
    if (typeof formDataObject.temperament === "string") {
      formDataObject.temperament = [formDataObject.temperament];
    } else if (!Array.isArray(formDataObject.temperament)) {
      formDataObject.temperament = [];
    }
    if (typeof formDataObject.adoptionRequirements === "string") {
      formDataObject.adoptionRequirements = [
        formDataObject.adoptionRequirements,
      ];
    } else if (!Array.isArray(formDataObject.adoptionRequirements)) {
      formDataObject.adoptionRequirements = [];
    }

    // Extract the image file
    const fileInput = e.currentTarget.querySelector(
      'input[name="image"]'
    ) as HTMLInputElement;
    const imageFile = fileInput?.files?.[0];
    if (!imageFile) {
      toast.error("Please select an image to upload.", {
        id: 1,
        duration: 2000,
      });
      return;
    }

    try {
      const imageUrl = await uploadImageToImgBB(imageFile);

      if (imageUrl) {
        formDataObject.image = imageUrl.url;
        formDataObject.age = Number(formDataObject.age);

        console.log("Form data:", formDataObject);

        formAction(formDataObject as FormData);
        onClose();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image. Please try again.", {
        id: 1,
        duration: 2000,
      });
    }
  };

  return (
    <div className="m-3 p-5">
      <form className="space-y-3" ref={ref} onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <Input
            isRequired
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
            isRequired
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
              isRequired
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
              isRequired
              disabledKeys={selectedSpecies}
            >
              {petBreeds.Dog.map((breed) => (
                <SelectItem key={breed.value} value={breed.value}>
                  {breed.label}
                </SelectItem>
              ))}
            </Select>
          )}
          <Input
            isRequired
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
            isRequired
          >
            {petSizes.map((size) => (
              <SelectItem key={size.value} value={size.value}>
                {size.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Gender"
            name="gender"
            variant="bordered"
            color="primary"
            isRequired
          >
            {petGenders.map((gender) => (
              <SelectItem key={gender.value} value={gender.value}>
                {gender.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            isRequired
            name="location"
            type="text"
            label="Location"
            variant="bordered"
            color="primary"
          />
          <Input
            isRequired
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
            isRequired
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
            isRequired
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
            isRequired
          >
            {adoptionRequirementss.map((requirement) => (
              <SelectItem key={requirement.value} value={requirement.value}>
                {requirement.label}
              </SelectItem>
            ))}
          </Select>

          <input
            className="hover:border-primary border-2 p-2 rounded-xl text-primary text-sm"
            required
            name="image"
            type="file"
            color="primary"
            onChange={(e) => (e?.target as HTMLInputElement).files?.[0]}
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
