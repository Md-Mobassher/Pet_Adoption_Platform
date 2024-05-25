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

export default function LoginForm() {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(loginUser, null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state?.message, { id: 1, duration: 3000 });
      ref.current!.reset();
      router.push("/");
      router.refresh();
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 3000 });
    }
  }, [router, state, ref]);

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
          label="Password"
          variant="bordered"
          color="primary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
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
