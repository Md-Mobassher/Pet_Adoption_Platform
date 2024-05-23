import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";
import Purpose from "@/components/pages/about/Purpose";
import Mission from "@/components/pages/about/Mission";
import TeamInfo from "@/components/pages/about/TeamInfo";
import ContactInfo from "@/components/pages/about/ContactInfo";

const AboutPage = () => {
  return (
    <div className="lg:p-6 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          <span className="text-primary">About</span> Us
        </h1>
      </div>
      <Purpose />

      <Mission />

      <TeamInfo />

      <ContactInfo />
    </div>
  );
};

export default AboutPage;
