import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import mission from "@/assets/images/mission.jpg";

const Mission = () => {
  return (
    <Card className="" shadow="none">
      <CardBody className="overflow-visible py-2 ">
        <div className="lg:flex md:flex lg:flex-row-reverse flex-row-reverse items-center justify-between lg:gap-10 w-full">
          <div className="flex-row">
            <Image src={mission} width={600} height={300} alt="mission" />
          </div>
          <div className="lg:w-2/5 md:w-2/3 lg:mt-0 mt-4 flex-row">
            <h1 className="lg:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
              Mission
            </h1>
            <h4 className=" lg:text-xl text-md text-gray-500 my-5 lg:text-start text-justify">
              Our mission is to promote animal welfare by increasing adoption
              rates and reducing the number of homeless pets. We strive to
              create a supportive community for pet lovers, offering resources
              and guidance throughout the adoption journey to ensure every pet
              finds a loving, permanent home.
            </h4>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Mission;
