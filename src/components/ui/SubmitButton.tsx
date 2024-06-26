"use client";

import { Button } from "@nextui-org/button";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" color="primary" size="lg">
      {pending ? (
        <div className="w-8 h-8 border-5 border-dashed rounded-full animate-spin border-white"></div>
      ) : (
        children
      )}
    </Button>
  );
}
