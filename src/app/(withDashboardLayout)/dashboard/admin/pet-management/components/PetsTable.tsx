"use client";

import { Edit, EyeIcon, Trash } from "lucide-react";
import React, { useState } from "react";
import CustomModal from "../../../../components/modal/CustomModal";
import { ModalHeader, useDisclosure } from "@nextui-org/modal";
import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import SubmitButton from "@/components/ui/SubmitButton";
import { deleteUser } from "../../adminAction/user.action";
import { useRouter } from "next/navigation";
import UpdatePetForm from "./UpdatePetForm";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "Species", uid: "species" },
  { name: "Age", uid: "age" },
  { name: "Temperment", uid: "temperament" },
  { name: "Size", uid: "size" },
  { name: "ACTIONS", uid: "actions" },
];

interface PetData {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  image: string;
  size: string;
  location: string;
  description: string;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
}

interface petTableProps {
  data: { data: PetData[] };
}

export default function PetsTable({ data }: petTableProps) {
  console.log(data);
  const router = useRouter();
  const pets = data;
  const [selected, setSelected] = useState<any>(null);
  const [action, setAction] = useState("");

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleDetails = (data: PetData) => {
    router.push(`/pets/${data.id}`);
  };

  const handleUpdate = (data: PetData) => {
    setAction("update");
    onOpen();
    setSelected(data);
  };

  const handleDelete = (id: string) => {
    setAction("delete");
    onOpen();
    setSelected(id);
  };

  const renderCell = React.useCallback(
    (data: PetData, columnKey: React.Key) => {
      const cellValue = data[columnKey as keyof PetData];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{
                radius: "lg",
                src: data.image,
                isBordered: true,
                color: "primary",
              }}
              description={data.breed}
              name={data.name}
            >
              {data.name}
            </User>
          );
        case "species":
          return (
            <Chip
              className="capitalize"
              // color={roleColorMap[data.species]}
              color="default"
              size="sm"
              variant="flat"
            >
              {data.species}
            </Chip>
          );
        case "breed":
          return (
            <Chip
              className="capitalize"
              // color={statusColorMap[data.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "size":
          return (
            <Chip className="capitalize" size="sm" variant="flat">
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon onClick={() => handleDetails(data)} />
                </span>
              </Tooltip>
              <Tooltip content="Edit Pet">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Edit onClick={() => handleUpdate(data)} />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete Pet">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <Trash onClick={() => handleDelete(data.id)} />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <div>
      <CustomModal
        size={action === "update" ? "3xl" : "xs"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {action === "update" && (
          <div>
            <ModalHeader className="flex flex-col gap-1">Edit Pet</ModalHeader>
            <UpdatePetForm onClose={onClose} data={selected}></UpdatePetForm>
          </div>
        )}
        {action === "delete" && (
          <div>
            <ModalHeader className="flex flex-col gap-1">
              Delete Pet
              <div className="flex space-x-4 justify-center items-center mt-4">
                <Button onClick={onClose} color="primary">
                  Cancel
                </Button>
                <form
                  action={async () => {
                    await deleteUser(selected), onClose();
                  }}
                >
                  <SubmitButton>Delete</SubmitButton>
                </form>
              </div>
            </ModalHeader>
          </div>
        )}
      </CustomModal>

      {/* TABLE  */}
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={pets}>
          {(item: PetData) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell key={columnKey.toString()}>
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
