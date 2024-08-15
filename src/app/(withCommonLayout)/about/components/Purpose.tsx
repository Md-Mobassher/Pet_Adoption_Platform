import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import purpose from "@/assets/images/purpose (2).jpg";
import PetContainer from "@/components/ui/PetContainer";
import assets from "@/assets";

const Purpose = () => {
  return (
    <>
      <div className="  bg-content1">
        <PetContainer>
          <div className=" py-2 ">
            <div className="flex lg:flex-row md:flex-row flex-col items-center justify-evenly lg:gap-10 md:gap-8 gap-6 w-full">
              <div className="w-full flex justify-center">
                <Image
                  src={assets.about.purpose}
                  alt="Purpose"
                  width={450}
                  height={450}
                  className=" lg:top-10 lg:left-10 md:top-5 md:left-5 top-2 left-1 rounded-[50px] z-0 object-cover"
                />
              </div>
              <div className="w-full">
                <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
                  Purpose
                </h1>
                <h4 className=" lg:text-xl text-md text-gray-500 lg:my-10 md:my-8 my-6 text-center md:text-start lg:text-start">
                  Our pet adoption platform is dedicated to bridging the gap
                  between loving families and pets in need of a home. We aim to
                  make the process of finding and adopting pets seamless,
                  transparent, and accessible to everyone. By partnering with
                  shelters and rescue organizations, we provide a comprehensive,
                  user-friendly platform where potential pet owners can explore,
                  connect, and adopt their perfect companions.
                </h4>
              </div>
            </div>
          </div>
        </PetContainer>
      </div>
    </>
  );
};

export default Purpose;
