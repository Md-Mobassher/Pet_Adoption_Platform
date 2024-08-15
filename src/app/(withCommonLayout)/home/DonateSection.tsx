import assets from "@/assets";
import PetButton from "@/components/ui/PetButton";
import PetContainer from "@/components/ui/PetContainer";
import Image from "next/image";

const DonateSection = () => {
  return (
    <div className="  bg-content1">
      <PetContainer>
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-evenly lg:gap-10 md:gap-8 gap-6 w-full">
          <div className="w-full">
            <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
              <span className="text-primary">Donate</span> To Our <br />
              Animal Shelter
            </h1>
            <h4 className=" lg:text-xl text-md text-gray-500 lg:my-10 md:my-8 my-6 text-center md:text-start lg:text-start">
              We believe that every animal deserves a safe and happy life. With
              that goal in mind, we have created animal shelters across the
              country to vaccinate, rescue, and foster stray cats and dogs.
            </h4>
            <div className="flex lg:justify-start md:justify-start justify-center">
              <PetButton title="Donate Now" />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src={assets.home.donate}
              alt="adopt image"
              width={350}
              height={400}
              className=" lg:top-10 lg:left-10 md:top-5 md:left-5 top-2 left-1 rounded-[50px] z-0 object-cover"
            />
          </div>
        </div>
      </PetContainer>
    </div>
  );
};

export default DonateSection;
