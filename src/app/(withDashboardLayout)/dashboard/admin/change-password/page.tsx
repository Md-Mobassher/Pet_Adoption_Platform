import { Card, CardBody, CardHeader } from "@nextui-org/card";
import ChangePassForm from "./ChangePassForm";

const ChangePasswordPage = () => {
  return (
    <div className="flex p-10 justify-center items-center">
      <Card className="lg:w-1/2 md:w-2/3 w-full lg:p-10 md:p-6 p-4  border border-gray-300">
        <CardHeader className="flex  justify-center ">
          <div className="flex">
            <p className="font-bold text-inherit px-4 text-3xl text-primary">
              Change Password
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <ChangePassForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default ChangePasswordPage;
