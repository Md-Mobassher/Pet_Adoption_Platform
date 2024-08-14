import Banner from "@/app/(withCommonLayout)/home/Banner";
import FIndPets from "@/app/(withCommonLayout)/home/FindPets";
import AdoptSection from "./home/AdoptSection";
import AchivementSection from "./home/AchivementSection";

const HomePage = () => {
  return (
    <>
      <Banner />
      <FIndPets />
      <AdoptSection />
      <AchivementSection />
    </>
  );
};

export default HomePage;
