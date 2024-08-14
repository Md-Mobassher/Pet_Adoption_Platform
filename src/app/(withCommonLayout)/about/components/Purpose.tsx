import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import purpose from "@/assets/images/purpose (2).jpg";

const Purpose = () => {
  return (
    <Card className="" shadow="none">
      <CardBody className="overflow-visible py-2 ">
        <div className="lg:flex md:flex items-center justify-between gap-10 w-full">
          <div>
            <Image src={purpose} width={600} height={400} alt="purpose" />
          </div>
          <div className="lg:w-2/5 md:w-2/3 lg:mt-0 mt-4">
            <h1 className="lg:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
              Purpose
            </h1>
            <h4 className=" lg:text-xl text-md text-gray-500 my-5 lg:text-start text-justify">
              Our pet adoption platform is dedicated to bridging the gap between
              loving families and pets in need of a home. We aim to make the
              process of finding and adopting pets seamless, transparent, and
              accessible to everyone. By partnering with shelters and rescue
              organizations, we provide a comprehensive, user-friendly platform
              where potential pet owners can explore, connect, and adopt their
              perfect companions.
            </h4>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Purpose;
