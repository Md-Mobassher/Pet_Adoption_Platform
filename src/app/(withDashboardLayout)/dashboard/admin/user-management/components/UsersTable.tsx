"use client";

import { Edit, Trash } from "lucide-react";
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
import UpdateUserForm from "./UpdateUserForm";

type StatusKey = "ACTIVE" | "DEACTIVE" | "DELETED";
type RoleKey = "ADMIN" | "USER";
type ChipColor =
  | "success"
  | "danger"
  | "warning"
  | "default"
  | "primary"
  | "secondary"
  | undefined;

type TStatusColor = Record<StatusKey, ChipColor>;
type TRoleColor = Record<RoleKey, ChipColor>;

const statusColorMap: TStatusColor = {
  ACTIVE: "success",
  DEACTIVE: "danger",
  DELETED: "warning",
};

const roleColorMap: TRoleColor = {
  ADMIN: "primary",
  USER: "success",
};

const columns = [
  { name: "NAME", uid: "name" },
  { name: "Role", uid: "role" },
  { name: "Status", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

interface UserData {
  id: string;
  name: string;
  email: string;
  role: RoleKey;
  status: StatusKey;
  image?: string;
}

interface UsersTableProps {
  data: { data: UserData[] };
}

export default function UsersTable({ data }: UsersTableProps) {
  const users = data?.data;
  const [selected, setSelected] = useState<any>(null);
  const [action, setAction] = useState("");

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleUpdate = (data: UserData) => {
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
    (data: UserData, columnKey: React.Key) => {
      const cellValue = data[columnKey as keyof UserData];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: data.image }}
              description={data.email}
              name={data.name}
            >
              {data.name}
            </User>
          );
        case "role":
          return (
            <Chip
              className="capitalize"
              color={roleColorMap[data.role]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[data.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Edit onClick={() => handleUpdate(data)} />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
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
            <ModalHeader className="flex flex-col gap-1">
              Update User
            </ModalHeader>
            <UpdateUserForm onClose={onClose} data={selected}></UpdateUserForm>
          </div>
        )}
        {action === "delete" && (
          <div>
            <ModalHeader className="flex flex-col gap-1">
              Delete User
              <div className="flex space-x-4 justify-center items-center mt-4">
                <Button onClick={onClose} color="primary">
                  Cancel
                </Button>
                <form
                  action={async () => {
                    // await deleteCar(selected), onClose();
                  }}
                >
                  {/* <ActionSubmitButton>delete</ActionSubmitButton> */}
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
        <TableBody items={users}>
          {(item: UserData) => (
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
