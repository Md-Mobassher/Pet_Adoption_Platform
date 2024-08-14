import Banner from "@/app/(withCommonLayout)/home/Banner";
import FIndPets from "@/app/(withCommonLayout)/home/FindPets";
import AdoptSection from "./home/AdoptSection";

const HomePage = () => {
  return (
    <>
      <Banner />
      <FIndPets />
      <AdoptSection />
    </>
  );
};

export default HomePage;
