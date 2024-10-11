"use client";

import { Button } from "@nextui-org/button";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  children: ReactNode;
  onClick?: () => void; // Optional onClick handler
}

export default function SubmitButton({
  children,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      color="primary"
      size="lg"
      {...props}
    >
      {pending ? (
        <div className="w-8 h-8 border-5 border-dashed rounded-full animate-spin border-white"></div>
      ) : (
        children
      )}
    </Button>
  );
}
