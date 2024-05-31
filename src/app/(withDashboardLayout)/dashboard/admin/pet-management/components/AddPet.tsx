"use client";

import { ModalHeader, useDisclosure } from "@nextui-org/modal";
import CustomModal from "../../../../components/modal/CustomModal";
import { Button } from "@nextui-org/button";
import AddPetForm from "./AddPetFrom";

export default function AddPet() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <div className="my-4">
      <CustomModal
        size="5xl"
        scrollBehavior="outside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalHeader className="flex justify-center mt-3 gap-1 text-2xl font-semibold">
          <h3 className="font-semibold">
            Add New <span className="text-primary">Pet</span>
          </h3>
        </ModalHeader>
        <AddPetForm onClose={onClose}></AddPetForm>
      </CustomModal>
      <Button color="primary" onClick={onOpen}>
        Add New Pet
      </Button>
    </div>
  );
}
