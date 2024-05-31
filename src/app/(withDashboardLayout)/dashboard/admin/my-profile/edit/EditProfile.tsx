"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

const editProfileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Email is required"),
});

export type TEditProfileProps = {
  name: string;
  email: string;
  accessToken: string;
};

const EditProfile = ({ accessToken, name, email }: TEditProfileProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: name,
    email: email,
  });
  const [errors, setErrors] = useState<Record<string, any>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      editProfileSchema.parse(formData);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/update-profile`,
        {
          method: "PATCH",
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
        router.push("/dashboard/admin/my-profile");
        router.refresh();
      } else {
        toast.error(result.message, { id: 1, duration: 3000 });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.format();
        setErrors(formattedErrors);
      } else {
        toast.error("Profile Edit failed", { id: 1, duration: 3000 });
      }
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
          defaultValue={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.name._errors[0]}
          </p>
        )}
        <Input
          className="mt-5"
          name="email"
          label="Email"
          variant="bordered"
          color="primary"
          defaultValue={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.email._errors[0]}
          </p>
        )}

        <div className="mt-5">
          <Button type="submit" color="primary" size="lg" fullWidth>
            Edit Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
