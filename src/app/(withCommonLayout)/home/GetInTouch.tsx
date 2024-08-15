import assets from "@/assets";
import PetContainer from "@/components/ui/PetContainer";
import SubmitButton from "@/components/ui/SubmitButton";
import SubTitle from "@/components/ui/SubTitle";
import Title from "@/components/ui/Title";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="mb-5">
      <PetContainer>
        <div className="flex justify-center items-center">
          <Image
            src={assets.home.getTouch}
            alt="get in touch"
            width={800}
            height={500}
          />
        </div>

        <Title title="Get In Touch With Us" />
        <SubTitle title="Want to get the latest updates on pet care? Then subscribe to our newsletter for fun tips, tutorials and much more" />

        <div className="flex justify-center items-center mt-5 gap-5">
          <input
            type="email"
            placeholder="Your Email"
            className="px-6 py-3 rounded-full text-gray-500 border-1 border-gray-300 w-sm bg-white"
          />
          <SubmitButton>Subcribe</SubmitButton>
        </div>
      </PetContainer>
    </div>
  );
};

export default GetInTouch;
