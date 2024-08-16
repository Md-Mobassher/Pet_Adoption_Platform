"use client";

import { createRef, useState } from "react";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import SubmitButton from "@/components/ui/SubmitButton";
import { loginUser } from "../actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOff, Copy } from "lucide-react";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const router = useRouter();
  const formRef = createRef<HTMLFormElement>();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [errors, setErrors] = useState<Record<string, any>>({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleVisibilityToggle = (field: string) => {
    if (field === "password") {
      setIsVisiblePass(!isVisiblePass);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      loginSchema.parse(formData);
      const result = await loginUser(formData);

      if (result.success) {
        toast.success(result.message || "Successfully Login", {
          id: 1,
          duration: 3000,
        });
        formRef.current!.reset();
        router.push("/");
      } else {
        toast.error(result.message, { id: 1, duration: 3000 });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.format();
        setErrors(formattedErrors);
      } else {
        toast.error("Registration failed", { id: 1, duration: 3000 });
      }
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard", { id: 2, duration: 2000 });
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input
          className="mt-5"
          name="email"
          type="email"
          label="Email"
          variant="bordered"
          color="primary"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.email._errors[0]}
          </p>
        )}

        <Input
          className="mt-5"
          name="password"
          label="Password"
          variant="bordered"
          color="primary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => handleVisibilityToggle("password")}
            >
              {isVisiblePass ? (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisiblePass ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-600 text-sm my-2 pl-3">
            {errors.password._errors[0]}
          </p>
        )}
        <div className="flex justify-end my-3">
          <p className="text-gray-500">Don&apos;t have an account?</p>{" "}
          <Link className="text-primary ml-2" href="/register">
            Please Register
          </Link>
        </div>
        <div className="flex justify-between mt-8">
          <Button
            variant="bordered"
            size="lg"
            className="hover:bg-primary bg-gray-300 text-primary hover:text-white border-primary"
            onPress={onOpen}
          >
            Demo
          </Button>
          <SubmitButton>Login</SubmitButton>
        </div>
      </form>

      {/* modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        className="p-5"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-semibold">
                Demo Credentials
              </ModalHeader>
              <ModalBody>
                {/* admin credential */}
                <div>
                  <h3 className="mb-4 text-xl font-bold underline">Admin:</h3>

                  <div className="flex justify-between  items-center gap-3 mb-2">
                    <div className="w-[22%]">
                      <p className="">Email: </p>
                    </div>
                    <div className="w-[75%] flex justify-between bg-gray-300 text-primary-400 p-2 rounded-lg">
                      <p>admin@gmail.com</p>
                      <button
                        onClick={() => copyToClipboard("admin@gmail.com")}
                        className="focus:outline-none"
                      >
                        <Copy className="hover:text-primary cursor-pointer" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between  items-center gap-3">
                    <div className="w-[22%]">
                      <p className="">Password: </p>
                    </div>
                    <div className="w-[75%] flex justify-between bg-gray-300 text-primary-400 p-2 rounded-lg">
                      <p>Admin123</p>
                      <button
                        onClick={() => copyToClipboard("Admin123")}
                        className="focus:outline-none"
                      >
                        <Copy className="hover:text-primary cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* user credential */}
                <div>
                  <h3 className="mb-4 text-xl font-bold underline">User:</h3>

                  <div className="flex justify-between  items-center gap-3 mb-2">
                    <div className="w-[22%]">
                      <p className="">Email: </p>
                    </div>
                    <div className="w-[75%] flex justify-between bg-gray-300 text-primary-400 p-2 rounded-lg">
                      <p>user@gmail.com</p>
                      <button
                        onClick={() => copyToClipboard("user@gmail.com")}
                        className="focus:outline-none"
                      >
                        <Copy className="hover:text-primary cursor-pointer" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between  items-center gap-3">
                    <div className="w-[22%]">
                      <p className="">Password: </p>
                    </div>
                    <div className="w-[75%] flex justify-between bg-gray-300 text-primary-400 p-2 rounded-lg">
                      <p>User123</p>
                      <button
                        onClick={() => copyToClipboard("User123")}
                        className="focus:outline-none"
                      >
                        <Copy className="hover:text-primary cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
