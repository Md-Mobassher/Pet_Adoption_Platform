"use client";

import { createRef, useEffect, useState } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { Input } from "@nextui-org/input";
import SubmitButton from "@/components/ui/SubmitButton";
import { loginUser } from "../actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOff } from "lucide-react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const router = useRouter();
  const formRef = createRef<HTMLFormElement>();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [errors, setErrors] = useState<Record<string, any>>({});

  const handleVisibilityToggle = (field: string) => {
    if (field === "password") {
      setIsVisiblePass(!isVisiblePass);
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
      loginSchema.parse(formData);
      const result = await loginUser(formData);

      if (result.success) {
        toast.success(result.message || "Successfully Login", {
          id: 1,
          duration: 3000,
        });
        formRef.current!.reset();
        router.push("/");
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
        <div className="flex justify-end  my-3">
          Donot have an account?{" "}
          <Link className="text-primary ml-2" href="/register">
            Please Register
          </Link>
        </div>
        <div className="flex justify-end mt-5">
          <SubmitButton>Login</SubmitButton>
        </div>
      </form>
    </div>
  );
}
