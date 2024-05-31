"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { Checkbox } from "@nextui-org/checkbox";

export type TEditProfileProps = {
  id?: string;
  name: string;
  email: string;
  accessToken: string;
  petId: string;
  petOwnershipExperience: string;
};

const AdoptionRequestForm = ({
  accessToken,
  id,
  name,
  email,
  petId,
  petOwnershipExperience,
}: TEditProfileProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);
  const [formData, setFormData] = useState({
    id: id,
    name: name,
    email: email,
    petId: petId,
    petOwnershipExperience: petOwnershipExperience,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${accessToken}`,
          },
          body: JSON.stringify(formData),
          cache: "no-store",
        }
      );

      const result = await res.json();

      if (result.success) {
        toast.success(result.message, {
          id: 1,
          duration: 3000,
        });
        router.push("/dashboard/my-adopted-pets");
        router.refresh();
      } else {
        toast.error(result.message, { id: 1, duration: 3000 });
      }
    } catch (error) {
      toast.error("Adoption request failed!!!", { id: 1, duration: 3000 });
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input
          className="mt-5"
          name="name"
          label="Name"
          variant="bordered"
          color="primary"
          value={formData.name}
          disabled
        />

        <Input
          className="mt-5"
          name="email"
          label="Email"
          variant="bordered"
          color="primary"
          value={formData.email}
          disabled
        />

        <Input
          className="mt-5"
          name="petId"
          label="Pet Id"
          variant="bordered"
          color="primary"
          value={formData.petId}
          disabled
          onChange={handleInputChange}
        />

        <Input
          className="mt-5"
          name="petOwnershipExperience"
          label="Pet OwnerShip Experience"
          variant="bordered"
          color="primary"
          defaultValue={formData.petOwnershipExperience || "Good"}
          onChange={handleInputChange}
        />

        <Checkbox
          className="mt-2 text-sm"
          isSelected={isSelected}
          onValueChange={setIsSelected}
        >
          Aggree to terms and conditions?
        </Checkbox>

        <div className="mt-5">
          <Button
            isDisabled={!isSelected}
            type="submit"
            color="primary"
            size="lg"
            fullWidth
          >
            Adoption Request
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdoptionRequestForm;
