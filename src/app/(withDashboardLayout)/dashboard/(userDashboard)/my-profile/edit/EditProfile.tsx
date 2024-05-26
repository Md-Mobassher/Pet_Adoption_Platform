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

const EditProfile = ({
  name,
  email,
  accessToken,
}: {
  name: string;
  email: string;
  accessToken: string;
}) => {
  console.log(name, email, accessToken);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: name,
    email: email,
  });
  const [errors, setErrors] = useState<Record<string, any>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      editProfileSchema.parse(formData);

      const res = await fetch(`${process.env.serverUrl}/users/update-profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },

        cache: "no-store",
      });
      const result = await res.json();

      if (result.success) {
        toast.success(result.message, {
          id: 1,
          duration: 3000,
        });
        formRef.current!.reset();
        router.push("/my-profile");
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
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
