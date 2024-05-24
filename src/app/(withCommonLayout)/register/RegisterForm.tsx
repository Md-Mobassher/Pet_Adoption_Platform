"use client";

import SubmitButton from "@/components/ui/SubmitButton";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { signUpUser } from "../actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const ref = createRef<HTMLFormElement>();
  const router = useRouter();
  const [state, formAction] = useFormState(signUpUser, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success("successfully signUp", { id: 1, duration: 2000 });
      ref.current!.reset();
      router.push("/login");
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  }, [router, state, ref]);

  return (
    <div>
      <form ref={ref} action={formAction}>
        <Input
          name="name"
          type="text"
          label="Name"
          variant="bordered"
          color="primary"
          fullWidth
        />
        <Input
          className="mt-5"
          name="email"
          type="email"
          label="Email"
          variant="bordered"
          color="primary"
        />
        <Input
          className="mt-5"
          name="password"
          type="password"
          label="Password"
          variant="bordered"
          color="primary"
        />
        <Input
          className="mt-5"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          variant="bordered"
          color="primary"
        />
        {/* 
        {errors && (
          <div className="bg-red-500 py-2 my-2">Password Do not Match!!!</div>
        )} */}
        <div className="flex justify-end text-md my-3">
          Already have an account?{" "}
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
