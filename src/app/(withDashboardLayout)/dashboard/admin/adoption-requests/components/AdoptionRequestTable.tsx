"use client";

import { Edit } from "lucide-react";
import React, { useState } from "react";
import CustomModal from "../../../../components/modal/CustomModal";
import { ModalHeader, useDisclosure } from "@nextui-org/modal";
import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { IPetData } from "../../pet-management/components/PetsTable";
import UpdateAdoptionStatus from "./UpdateAdoptionStatus";
import { IUserData } from "../../user-management/components/UsersTable";

type StatusKey = "PENDING" | "APPROVED" | "REJECTED";
type ChipColor =
  | "success"
  | "danger"
  | "warning"
  | "default"
  | "primary"
  | "secondary"
  | undefined;

type TStatusColor = Record<StatusKey, ChipColor>;

const statusColorMap: TStatusColor = {
  PENDING: "success",
  APPROVED: "danger",
  REJECTED: "warning",
};

const columns = [
  { name: "Pet Name", uid: "petname" },
  { name: "User Name", uid: "username" },
  { name: "Status", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

export interface IAdoptionRequest {
  id: string;
  userId: string;
  petId: string;
  status: StatusKey;
  petOwnershipExperience: string;
  createdAt: string;
  updatedAt: string;
  pet: IPetData;
  user: IUserData;
}

interface AdoptionRequestTableProps {
  data: { data: IAdoptionRequest[] | [] };
}

export default function AdoptionRequestTable({
  data,
}: AdoptionRequestTableProps) {
  const adoptionRequest = data?.data;
  const [selected, setSelected] = useState<any>(null);
  const [action, setAction] = useState("");

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleUpdate = React.useCallback(
    (data: IAdoptionRequest) => {
      setAction("update");
      onOpen();
      setSelected(data);
    },
    [onOpen]
  );

  const handleDelete = React.useCallback(
    (id: string) => {
      setAction("delete");
      onOpen();
      setSelected(id);
    },
    [onOpen]
  );

  const renderCell = React.useCallback(
    (data: IAdoptionRequest, columnKey: React.Key) => {
      const cellValue = data[columnKey as keyof IAdoptionRequest];

      switch (columnKey) {
        case "petname":
          return (
            <User
              avatarProps={{ radius: "lg", src: data?.pet?.image }}
              name={data?.pet?.name}
              description={data?.pet?.species}
            >
              {data?.pet?.name}
            </User>
          );
        case "username":
          return (
            <Chip className="capitalize" size="sm">
              {data?.user?.name}
            </Chip>
          );

        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[data?.status]}
              size="sm"
              variant="flat"
            >
              {data?.status}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Change Status">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Edit onClick={() => handleUpdate(data)} />
                </span>
              </Tooltip>
              {/* <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <Trash onClick={() => handleDelete(data.id)} />
                </span>
              </Tooltip> */}
            </div>
          );
        default:
          return cellValue;
      }
    },
    [handleUpdate, handleDelete]
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
            <ModalHeader className="flex flex-col gap-1">
              Update Status
            </ModalHeader>
            <UpdateAdoptionStatus
              onClose={onClose}
              data={selected}
            ></UpdateAdoptionStatus>
          </div>
        )}
        {/* {action === "delete" && (
          <div>
            <ModalHeader className="flex flex-col gap-1">
              Delete User
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
        )} */}
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
        <TableBody items={adoptionRequest}>
          {(item: IUserData) => (
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
