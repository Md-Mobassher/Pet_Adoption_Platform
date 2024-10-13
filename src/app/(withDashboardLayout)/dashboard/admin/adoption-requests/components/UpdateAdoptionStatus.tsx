"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import SubmitButton from "@/components/ui/SubmitButton";
import { updateAdoptionStatus } from "../../adminAction/adoption.action";

const statuses = [
  { label: "PENDING", value: "PENDING" },
  { label: "APPROVED", value: "APPROVED" },
  { label: "REJECTED", value: "REJECTED" },
];

export default function UpdateAdoptionStatus({ onClose, data }: any) {
  const [state, formAction] = useFormState(
    updateAdoptionStatus.bind(data, data.id),
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
