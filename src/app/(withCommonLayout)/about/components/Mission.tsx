import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import mission from "@/assets/images/mission.jpg";
import PetContainer from "@/components/ui/PetContainer";
import assets from "@/assets";

const Mission = () => {
  return (
    <PetContainer>
      <div className=" py-2 ">
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-evenly lg:gap-10 md:gap-8 gap-6 w-full">
          <div className="w-full">
            <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
              Mission
            </h1>
            <h4 className=" lg:text-xl text-md text-gray-500 lg:my-10 md:my-8 my-6 text-center md:text-start lg:text-start">
              Our mission is to promote animal welfare by increasing adoption
              rates and reducing the number of homeless pets. We strive to
              create a supportive community for pet lovers, offering resources
              and guidance throughout the adoption journey to ensure every pet
              finds a loving, permanent home.
            </h4>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src={assets.about.mission}
              alt="adopt image"
              width={500}
              height={500}
              className=" lg:top-10 lg:left-10 md:top-5 md:left-5 top-2 left-1 rounded-[70px] z-0 object-cover "
            />
          </div>
        </div>
      </div>
    </PetContainer>
  );
};

export default Mission;
