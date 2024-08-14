import Banner from "@/app/(withCommonLayout)/home/Banner";
import FIndPets from "@/app/(withCommonLayout)/home/FindPets";
import AdoptSection from "./home/AdoptSection";
import AchivementSection from "./home/AchivementSection";
import DonateSection from "./home/DonateSection";
import TestimonialSection from "./home/TestimonialSection";
import BecomePetParent from "./home/BecomePetParent";

const HomePage = () => {
  return (
    <>
      <Banner />
      <FIndPets />
      <AdoptSection />
      <AchivementSection />
      <DonateSection />
      <TestimonialSection />
      <BecomePetParent />
    </>
  );
};

export default HomePage;
