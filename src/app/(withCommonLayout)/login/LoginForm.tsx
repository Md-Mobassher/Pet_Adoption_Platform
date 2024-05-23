"use client";

import { createRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { Input } from "@nextui-org/input";
import SubmitButton from "@/components/ui/SubmitButton";

export default function LoginForm() {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  //   const [state, formAction] = useFormState(loginUser, null);
  //   useEffect(() => {
  //     if (state && state?.success) {
  //       toast.success(state?.message, { id: 1, duration: 2000 });
  //       ref.current!.reset();
  //       window.location.href = "/";
  //       // router.push("/")
  //     }
  //     if (state && !state?.success) {
  //       toast.error(state?.message, { id: 1, duration: 2000 });
  //     }
  //   }, [state, ref]);

  return (
    <div>
      <form ref={ref}>
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
