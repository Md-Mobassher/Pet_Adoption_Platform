"use client";
import SubmitButton from "@/components/ui/SubmitButton";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createRef } from "react";

const RegisterForm = () => {
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
          name="password"
          type="password"
          label="Confirm Password"
          variant="bordered"
          color="primary"
        />
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
