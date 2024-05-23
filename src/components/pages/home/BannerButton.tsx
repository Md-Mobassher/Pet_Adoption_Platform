"use client";

import { Button } from "@nextui-org/button";
import React from "react";

const BannerButton = () => {
  return (
    <div className="space-x-4">
      <Button
        onClick={() => console.log("Hello")}
        color="primary"
        radius="sm"
        size="lg"
      >
        Book Now
      </Button>
      <Button
        color="primary"
        variant="bordered"
        radius="sm"
        className="hover:bg-primary hover:text-white"
        size="lg"
      >
        Learn More
      </Button>
    </div>
  );
};

export default BannerButton;
