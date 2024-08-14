import PetButton from "@/components/ui/PetButton";
import Image from "next/image";
import assets from "@/assets";
import PetContainer from "@/components/ui/PetContainer";

const AdoptSection = () => {
  return (
    <div className="  bg-slate-100">
      <PetContainer>
        <div className=" py-2 ">
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-evenly lg:gap-10 md:gap-8 gap-6 w-full">
            <Image
              src={assets.home.adopt}
              alt="adopt image"
              width={500}
              height={500}
              className="rounded-[50px]"
            />
            <div className="lg:w-2/5 md:w-2/3">
              <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
                Adopt <span className="text-primary">Pet</span> And <br /> Save
                Their Lives
              </h1>
              <h4 className=" lg:text-xl text-md text-gray-500 my-5">
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
