"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { createRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
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
import { uploadImageToImgBB } from "../../../../../../../utils/uploadImageToImgBB";

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
  console.log(data);

  const [selectedSpecies, setSelectedSpecies] = useState<Species | "">(species);
  const [formData, setFormData] = useState(data);

  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(updatePet.bind(null, id), null);

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

    try {
      const fileInput = e.currentTarget.querySelector(
        'input[name="image"]'
      ) as HTMLInputElement;
      const imageFile = fileInput?.files?.[0];
      if (imageFile) {
        const imageUrl = await uploadImageToImgBB(imageFile);

        if (imageUrl) {
          formDataObject.image = imageUrl.url;
          return formDataObject;
        }
        formDataObject.age = Number(formDataObject.age);
        console.log("Form data:", formDataObject);

        formAction(formDataObject as FormData);
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
            name="name"
            type="text"
            label="Name"
            variant="bordered"
            color="primary"
            defaultValue={formData?.name}
          />
          <Select
            label="Species"
            name="species"
            variant="bordered"
            color="primary"
            defaultSelectedKeys={[formData.species]}
            onChange={(e) => {
              setFormData((prevData: string) => ({ prevData, species: e }));
            }}
            // onChange={(e) => setSelectedSpecies(e.target.value as Species)}
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
            defaultSelectedKeys={[formData.breed]}
            disabledKeys={selectedSpecies}
          >
            {petBreeds.dog.map((breed) => (
              <SelectItem key={breed.value} value={breed.value}>
                {breed.label}
              </SelectItem>
            ))}
          </Select>

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
          <Input
            name="location"
            type="text"
            label="Location"
            variant="bordered"
            color="primary"
            defaultValue={location}
          />
          <Input
            name="description"
            label="Description"
            variant="bordered"
            color="primary"
            defaultValue={description}
          />

          <Select
            name="medicalHistory"
            label="Medical History"
            variant="bordered"
            color="primary"
            selectionMode="multiple"
            defaultSelectedKeys={[formData.medicalHistory]}
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
            defaultSelectedKeys={[formData.temperment]}
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
            defaultSelectedKeys={[formData.adoptionRequirement]}
          >
            {adoptionRequirements.map((requirement) => (
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
            onChange={(e) => (e?.target as HTMLInputElement).files?.[0]}
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
