"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const BannerButton = () => {
  return (
    <div className="space-x-4">
      <Link href={"/pets"}>
        <Button color="primary" radius="sm" size="lg">
          All Pets
        </Button>
      </Link>
      <Link href={"/about"}>
        <Button
          color="primary"
          variant="bordered"
          radius="sm"
          className="hover:bg-primary hover:text-white"
          size="lg"
        >
          About Us
        </Button>
      </Link>
    </div>
  );
};

export default BannerButton;
