import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";
import Purpose from "@/app/(withCommonLayout)/about/components/Purpose";
import Mission from "@/app/(withCommonLayout)/about/components/Mission";
import TeamInfo from "@/app/(withCommonLayout)/about/components/TeamInfo";
import ContactInfo from "@/app/(withCommonLayout)/contact/components/ContactInfo";
import GetInTouch from "../home/GetInTouch";

const AboutPage = () => {
  return (
    <div className="mt-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          <span className="text-primary">About</span> Us
        </h1>
      </div>
      <Purpose />

      <Mission />

      <TeamInfo />

      <GetInTouch />
    </div>
  );
};

export default AboutPage;
