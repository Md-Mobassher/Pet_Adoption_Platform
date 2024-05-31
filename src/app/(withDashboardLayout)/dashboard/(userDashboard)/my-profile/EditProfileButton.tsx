"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";

const EditProfileButton = () => {
  return (
    <Link href={`my-profile/edit`}>
      <Button color="primary" radius="sm" size="lg">
        Edit Profile
      </Button>
    </Link>
  );
};

export default EditProfileButton;
