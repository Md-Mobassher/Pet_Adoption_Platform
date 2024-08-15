import PetContainer from "@/components/ui/PetContainer";
import SubTitle from "@/components/ui/SubTitle";
import Title from "@/components/ui/Title";
import Testimonials from "./Testimonials";

const TestimonialSection = () => {
  return (
    <div className="mb-5">
      <PetContainer>
        <Title title="Hear From Our Pet Parents" />
        <SubTitle title="Don’t just take our word for it. Hear from over hundreds of pet owners who have rescued animals from our shelters." />

        <Testimonials />
      </PetContainer>
    </div>
  );
};

export default TestimonialSection;
