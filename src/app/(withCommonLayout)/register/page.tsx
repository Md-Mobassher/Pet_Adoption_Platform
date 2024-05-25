import { Card, CardBody, CardHeader } from "@nextui-org/card";
import RegisterForm from "./RegisterForm";
import Link from "next/link";
import { Cat } from "lucide-react";

const RegisterPage = () => {
  return (
    <div className="my-16 flex justify-center items-center">
      <Card className=" p-5 lg:px-24">
        <CardHeader className="flex justify-center mb-3 items-center">
          <Link className="text-center" href="/">
            <Cat className="size-10 mr-2 text-primary" />
          </Link>
          <div className="flex">
            <p className="font-bold text-inherit px-4 text-4xl text-primary">
              Register
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <RegisterForm></RegisterForm>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;
