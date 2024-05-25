"use client";

import { Button } from "@nextui-org/button";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Spinner } from "@nextui-org/spinner";

export default function SubmitButton({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" color="primary" size="lg">
      {pending ? <Spinner /> : children}
    </Button>
  );
}
