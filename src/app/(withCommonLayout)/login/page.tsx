import { Card, CardBody, CardHeader } from "@nextui-org/card";
import LoginForm from "./LoginForm";
import { Cat } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import assets from "@/assets";

const LoginPage = () => {
  return (
    <div className="my-32 flex justify-center items-center ">
      <Card className=" p-5 lg:px-20 border-gray-300 border pb-8">
        <CardHeader className="flex  justify-between items-end mb-3">
          <div className="flex">
            <p className="font-bold text-inherit px-4 text-4xl text-primary">
              Login To
            </p>
          </div>
          <Link className="flex justify-start items-center" href="/">
            <Image src={assets.logo} alt="logo" className="" width={200} />
          </Link>
        </CardHeader>
        <CardBody>
          <LoginForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
