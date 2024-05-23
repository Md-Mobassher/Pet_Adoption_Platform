import { Card, CardBody, CardHeader } from "@nextui-org/card";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className=" p-5">
        <CardHeader className="flex justify-center">
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
