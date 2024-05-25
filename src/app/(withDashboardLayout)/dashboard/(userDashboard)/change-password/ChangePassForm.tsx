"use client";

import { useState, useRef } from "react";
import { EyeIcon, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { changePassword, logOut } from "@/app/(withCommonLayout)/actions/auth";
import { useRouter } from "next/navigation";

const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(6, "Password must be at least 6 characters"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmNewPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
  });

const ChangePassForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isVisibleOld, setIsVisibleOld] = useState(false);
  const [isVisibleNew, setIsVisibleNew] = useState(false);
  const [isVisibleConfirmNew, setIsVisibleConfirmNew] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, any>>({});

  const handleVisibilityToggle = (field: string) => {
    if (field === "oldPassword") {
      setIsVisibleOld(!isVisibleOld);
    } else if (field === "newPassword") {
      setIsVisibleNew(!isVisibleNew);
    } else if (field === "confirmNewPassword") {
      setIsVisibleConfirmNew(!isVisibleConfirmNew);
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
      changePasswordSchema.parse(formData);
      const { oldPassword, newPassword } = formData;
      const result = await changePassword({ oldPassword, newPassword });

      if (result.success) {
        toast.success(result.message, {
          id: 1,
          duration: 3000,
        });
        formRef.current!.reset();
        logOut();
        router.refresh();
      } else {
        toast.error(result.message, { id: 1, duration: 3000 });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.format();
        setErrors(formattedErrors);
      } else {
        toast.error("Password Change failed", { id: 1, duration: 3000 });
      }
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input
          className="mt-5"
          name="oldPassword"
          label="Old Password"
          variant="bordered"
          color="primary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => handleVisibilityToggle("oldPassword")}
            >
              {isVisibleOld ? (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisibleOld ? "text" : "password"}
          value={formData.oldPassword}
          onChange={handleChange}
        />
        {errors.oldPassword && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.oldPassword._errors[0]}
          </p>
        )}
        <Input
          className="mt-5"
          name="newPassword"
          label="New Password"
          variant="bordered"
          color="primary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => handleVisibilityToggle("newPassword")}
            >
              {isVisibleNew ? (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisibleNew ? "text" : "password"}
          value={formData.newPassword}
          onChange={handleChange}
        />
        {errors.newPassword && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.newPassword._errors[0]}
          </p>
        )}

        <Input
          className="mt-5"
          name="confirmNewPassword"
          label="Confirm New Password"
          variant="bordered"
          color="primary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => handleVisibilityToggle("confirmNewPassword")}
            >
              {isVisibleConfirmNew ? (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisibleConfirmNew ? "text" : "password"}
          value={formData.confirmNewPassword}
          onChange={handleChange}
        />
        {errors.confirmNewPassword && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.confirmNewPassword._errors[0]}
          </p>
        )}

        <div className="mt-5">
          <Button type="submit" color="primary" size="lg" fullWidth>
            Change Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassForm;
