import Purpose from "@/app/(withCommonLayout)/about/components/Purpose";
import Mission from "@/app/(withCommonLayout)/about/components/Mission";
import TeamInfo from "@/app/(withCommonLayout)/about/components/TeamInfo";
import GetInTouch from "../home/GetInTouch";
import Title from "@/components/ui/Title";

const AboutPage = () => {
  return (
    <div className="mt-5">
      <Title title="About Us" />

      <Purpose />

      <Mission />

      <TeamInfo />

      <GetInTouch />
    </div>
  );
};

export default AboutPage;
