"use client";

import { createRef, useEffect } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { Input } from "@nextui-org/input";
import SubmitButton from "@/components/ui/SubmitButton";
import { loginUser } from "../actions/auth";
import { toast } from "sonner";

export default function LoginForm() {
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(loginUser, null);

  useEffect(() => {
    console.log(state);
    if (state && state?.success) {
      toast.success(state?.message, { id: 1, duration: 3000 });
      ref.current!.reset();
      window.location.href = "/";
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 3000 });
    }
  }, [state, ref]);

  return (
    <div>
      <form ref={ref} action={formAction}>
        <Input
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
