import { Card, CardBody, CardHeader } from "@nextui-org/card";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className=" p-5 lg:px-24">
        <CardHeader className="flex justify-center">
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
