import PetButton from "@/components/ui/PetButton";
import Image from "next/image";
import assets from "@/assets";
import PetContainer from "@/components/ui/PetContainer";

const BecomePetParent = () => {
  return (
    <div className="  bg-slate-100">
      <PetContainer>
        <div className=" py-2 ">
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-evenly lg:gap-10 md:gap-8 gap-6 w-full">
            <div className="w-full flex justify-center">
              <Image
                src={assets.home.petparent}
                alt="adopt image"
                width={500}
                height={500}
                className=" lg:top-10 lg:left-10 md:top-5 md:left-5 top-2 left-1 rounded-[70px] z-0 object-cover "
              />
            </div>
            <div className="w-full">
              <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
                Ready To Become <br /> A{" "}
                <span className="text-primary">Pet</span> Parent?
              </h1>
              <h4 className=" lg:text-xl text-md text-gray-500 lg:my-10 md:my-8 my-6 text-center md:text-start lg:text-start">
                If you are considering adopting a pet, then congratulations! You
                are in the right place. Read this guide to learn everything you
                need to know to become the best pet parent for your furbaby.
              </h4>
              <div className="flex lg:justify-start md:justify-start justify-center">
                <PetButton title="Read More" />
              </div>
            </div>
          </div>
        </div>
      </PetContainer>
    </div>
  );
};

export default BecomePetParent;
