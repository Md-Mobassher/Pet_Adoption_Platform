import PetButton from "@/components/ui/PetButton";
import Image from "next/image";
import assets from "@/assets";
import PetContainer from "@/components/ui/PetContainer";

const AdoptSection = () => {
  return (
    <div className="  bg-content1">
      <PetContainer>
        <div className=" py-2 ">
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-evenly lg:gap-10 md:gap-8 gap-6 w-full">
            <div className="w-full flex justify-center">
              <Image
                src={assets.home.adopt}
                alt="adopt image"
                width={450}
                height={450}
                className=" lg:top-10 lg:left-10 md:top-5 md:left-5 top-2 left-1 rounded-[50px] z-0 object-cover shadow-lg"
              />
            </div>
            <div className="w-full">
              <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
                Adopt <span className="text-primary">Pet</span> And <br /> Save
                Their Lives
              </h1>
              <h4 className=" lg:text-xl text-md text-gray-500 lg:my-10 md:my-8 my-6 text-center md:text-start lg:text-start">
                Why bother shopping for pets when they are thousands of homeless
                puppies and kittens looking for a family? Adopt rescued animals
                from our shelters and make a change in the lives of animals in
                your area.
              </h4>
              <div className="flex lg:justify-start md:justify-start justify-center">
                <PetButton title="Contact Us" />
              </div>
            </div>
          </div>
        </div>
      </PetContainer>
    </div>
  );
};

export default AdoptSection;
