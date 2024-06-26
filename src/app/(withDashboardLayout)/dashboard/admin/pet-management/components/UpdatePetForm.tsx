"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { createRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { Input } from "@nextui-org/input";
import {
  medicalHistories,
  petBreeds,
  petSizes,
  petSpecies,
  Species,
  temperaments,
  adoptionRequirementss,
  petGenders,
} from "./pet.data";
import { Button } from "@nextui-org/button";
import { updatePet } from "../../adminAction/pet.action";
import { uploadImageToImgBB } from "../../../../../../../utils/uploadImageToImgBB";

export default function UpdatePetForm({ onClose, data }: any) {
  const {
    id: petId,
    name,
    species,
    breed,
    size,
    gender,
    age,
    location,
    adoptionRequirements,
    temperament,
    description,
    image,
    medicalHistory,
  } = data;
  console.log(data);

  const [selectedSpecies, setSelectedSpecies] = useState<Species | "">(species);
  const [formData, setFormData] = useState({
    name,
    species,
    breed,
    size,
    gender,
    age,
    location,
    description,
    adoptionRequirements,
    temperament,
    medicalHistory,
    image,
  });

  console.log(formData.adoptionRequirements);
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(updatePet.bind(null, petId), null);

  useEffect(() => {
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
      formDataObject.age = Number(formDataObject.age);
      formDataObject.image = data.image;
      formAction(formDataObject as FormData);
    }

    if (imageFile) {
      try {
        const imageUrl = await uploadImageToImgBB(imageFile);
        if (imageUrl) {
          formDataObject.image = imageUrl.url;
        }
        formDataObject.age = Number(formDataObject.age);
        formAction(formDataObject as FormData);
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image. Please try again.", {
          id: 1,
          duration: 2000,
        });
      }
    }
  };

  return (
    <div className="m-3 p-5">
      <form className="space-y-3" ref={ref} onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <Input
            name="name"
            type="text"
            label="Name"
            variant="bordered"
            color="primary"
            defaultValue={formData.name}
          />

          <Select
            label="Species"
            name="species"
            variant="bordered"
            color="primary"
            defaultSelectedKeys={[formData.species]}
            onChange={(e) =>
              setSelectedSpecies(
                formData.species || (e.target.value as Species)
              )
            }
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
              defaultSelectedKeys={[formData.breed]}
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
              defaultSelectedKeys={[formData.breed]}
            >
              {petBreeds.dog.map((breed) => (
                <SelectItem key={breed.value} value={breed.value}>
                  {breed.label}
                </SelectItem>
              ))}
            </Select>
          )}

          <Input
            name="age"
            type="number"
            label="Age"
            variant="bordered"
            color="primary"
            defaultValue={formData.age}
          />

          <Select
            label="Size"
            name="size"
            variant="bordered"
            color="primary"
            defaultSelectedKeys={[formData.size]}
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
            defaultSelectedKeys={[formData.gender]}
          >
            {petGenders.map((gender) => (
              <SelectItem key={gender.value} value={gender.value}>
                {gender.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            name="location"
            type="text"
            label="Location"
            variant="bordered"
            color="primary"
            defaultValue={formData.location}
          />
          <Input
            name="description"
            label="Description"
            variant="bordered"
            color="primary"
            defaultValue={formData.description}
          />

          <Select
            name="medicalHistory"
            label="Medical History"
            variant="bordered"
            color="primary"
            selectionMode="multiple"
            defaultSelectedKeys={formData.medicalHistory}
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
            defaultSelectedKeys={formData.temperament}
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
            defaultSelectedKeys={formData.adoptionRequirements}
          >
            {adoptionRequirementss.map((requirement) => (
              <SelectItem key={requirement.value} value={requirement.value}>
                {requirement.label}
              </SelectItem>
            ))}
          </Select>

          <input
            className="hover:border-primary border-2 p-2 rounded-xl text-primary text-sm"
            name="image"
            type="file"
            color="primary"
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
