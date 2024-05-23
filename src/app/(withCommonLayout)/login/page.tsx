import { Card, CardBody, CardHeader } from "@nextui-org/card";
import LoginForm from "./LoginForm";
import { Cat } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="my-32 flex justify-center items-center">
      <Card className=" p-5 lg:px-20">
        <CardHeader className="flex  justify-center mb-3">
          <Link className="text-center" href="/">
            <Cat className="size-10 mr-2 text-primary" />
          </Link>
          <div className="flex">
            <p className="font-bold text-inherit px-4 text-4xl text-primary">
              Login
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <LoginForm></LoginForm>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
