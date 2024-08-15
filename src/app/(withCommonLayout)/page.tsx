import Banner from "@/app/(withCommonLayout)/home/Banner";
import FIndPets from "@/app/(withCommonLayout)/pets/components/FindPets";
import AdoptSection from "./home/AdoptSection";
import AchivementSection from "./home/AchivementSection";
import DonateSection from "./home/DonateSection";
import TestimonialSection from "./home/TestimonialSection";
import BecomePetParent from "./home/BecomePetParent";
import GetInTouch from "./home/GetInTouch";
import AvailablePets from "./home/AvailablePets";

const HomePage = () => {
  return (
    <>
      <Banner />
      <AvailablePets />
      <AdoptSection />
      <AchivementSection />
      <DonateSection />
      <TestimonialSection />
      <BecomePetParent />
      <GetInTouch />
    </>
  );
};

export default HomePage;
