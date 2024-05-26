"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import SubmitButton from "@/components/ui/SubmitButton";
import { updateUserStatus } from "../../adminAction/action";

const roles = [
  { label: "ADMIN", value: "ADMIN" },
  { label: "USER", value: "USER" },
];
const statuses = [
  { label: "ACTIVE", value: "ACTIVE" },
  { label: "DEACTIVE", value: "DEACTIVE" },
  { label: "DELETED", value: "DELETED" },
];

export default function UpdateUserForm({ onClose, data }: any) {
  const [state, formAction] = useFormState(
    updateUserStatus.bind(null, data.id),
    null
  );

  useEffect(() => {
    if (state && state?.success) {
      console.log(state);
      toast.success(state.message, { id: 1, duration: 2000 });
      onClose();
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  }, [state, onClose]);

  return (
    <div className="m-3 ">
      <form className="space-y-3" action={formAction}>
        <Select
          defaultSelectedKeys={[data.role]}
          name="role"
          variant="bordered"
          label="Select a Role"
          color="primary"
        >
          {roles.map((role) => (
            <SelectItem key={role.value} value={role.value}>
              {role.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          defaultSelectedKeys={[data.status]}
          name="status"
          variant="bordered"
          label="Select a Status"
          color="primary"
        >
          {statuses.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </Select>

        <div className="flex justify-end ">
          <SubmitButton>Update</SubmitButton>
        </div>
      </form>
    </div>
  );
}
