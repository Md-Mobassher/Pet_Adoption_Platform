"use client";

import Link from "next/link";
import { Button } from "@nextui-org/button";

interface IButton {
  title?: string;
  link?: string;
}
const PetButton = ({ title, link }: IButton) => {
  return (
    <Link href={link || "/"}>
      <Button color="primary" radius="sm" size="lg">
        {title || "Details"}
      </Button>
    </Link>
  );
};

export default PetButton;
