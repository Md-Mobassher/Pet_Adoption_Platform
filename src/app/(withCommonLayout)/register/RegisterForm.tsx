"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import { signUpUser } from "../actions/auth";
import { Input } from "@nextui-org/input";
import SubmitButton from "@/components/ui/SubmitButton";

const signUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isVisibleConfirmPass, setIsVisibleConfirmPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, any>>({});

  const handleVisibilityToggle = (field: string) => {
    if (field === "password") {
      setIsVisiblePass(!isVisiblePass);
    } else if (field === "confirmPassword") {
      setIsVisibleConfirmPass(!isVisibleConfirmPass);
    }
  };

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
      signUpSchema.parse(formData);
      const { name, email, password } = formData;
      const result = await signUpUser({ name, email, password });

      if (result.success) {
        toast.success(result.message || "Successfully Signed Up", {
          id: 1,
          duration: 3000,
        });
        formRef.current!.reset();
        router.push("/login");
      } else {
        toast.error(result.message, { id: 1, duration: 3000 });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.format();
        setErrors(formattedErrors);
      } else {
        toast.error("Registration failed", { id: 1, duration: 3000 });
      }
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          label="Name"
          variant="bordered"
          color="primary"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          className="max-w-sm"
        />
        {errors.name && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.name._errors[0]}
          </p>
        )}

        <Input
          className="mt-5"
          name="email"
          type="email"
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

        <Input
          className="mt-5"
          name="password"
          label="Password"
          variant="bordered"
          color="primary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => handleVisibilityToggle("password")}
            >
              {isVisiblePass ? (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisiblePass ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.password._errors[0]}
          </p>
        )}

        <Input
          className="mt-5"
          name="confirmPassword"
          label="Confirm Password"
          variant="bordered"
          color="primary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => handleVisibilityToggle("confirmPassword")}
            >
              {isVisibleConfirmPass ? (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisibleConfirmPass ? "text" : "password"}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.confirmPassword._errors[0]}
          </p>
        )}

        <div className="flex justify-end text-md my-3">
          <p className="text-gray-500"> Already have an account?</p>{" "}
          <Link className="text-primary ml-2" href="/login">
            Please Login
          </Link>
        </div>
        <div className="flex justify-end mt-5">
          <SubmitButton>Register</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
