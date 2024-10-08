import PetContainer from "@/components/ui/PetContainer";
import SubTitle from "@/components/ui/SubTitle";
import Title from "@/components/ui/Title";
import AchivementCard from "./AchivementCard";

const AchivementSection = () => {
  return (
    <div className="mb-5">
      <PetContainer>
        <Title title="Our Achievements" />
        <SubTitle title="In less than one year, our team at Pawwelfare have rescued and found homes for more than 300 stray cats and dogs. We believe in making our world a better place for helpless animals." />

        <AchivementCard />
      </PetContainer>
    </div>
  );
};

export default AchivementSection;
