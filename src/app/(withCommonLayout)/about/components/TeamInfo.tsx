import { Card } from "@nextui-org/card";
import Image from "next/image";
import PetContainer from "@/components/ui/PetContainer";
import Title from "@/components/ui/Title";
import SubTitle from "@/components/ui/SubTitle";
import assets from "../../../../assets/index";

const teamMembers = [
  {
    id: "1",
    name: "Md Mubarrat Hossain",
    position: "Founder & CEO",
    image: assets.about.ceo,
  },
  {
    id: "2",
    name: "Mubarrat Hossain Raiyan",
    position: "Chief Technology Officer",
    image: assets.about.cto,
  },
  {
    id: "3",
    name: "Mr Raiyan",
    position: "Adoption Coordinator",
    image: assets.about.ac,
  },
  {
    id: "4",
    name: "Raiyan Babu",
    position: "Marketing Specialist",
    image: assets.about.ms,
  },
];

const TeamInfo = () => {
  return (
    <div className="bg-content1">
      <PetContainer>
        <Title title="Our Team Member" />
        <SubTitle
          title=" Our team is passionate about animal welfare and dedicated to making
          the adoption process as easy and effective as possible. Meet the
          people behind the platform:"
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-8 md:gap-6 gap-5 mt-10 mb-5">
          {teamMembers.map((member) => (
            <Card
              className="relative group min-w-sm w-full h-96 overflow-hidden rounded-lg border hover:shadow-2xl shadow-xl"
              key={member.id}
            >
              <div className="h-full w-full">
                <Image
                  src={member.image}
                  alt={member.name || "member"}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-2xl font-bold mb-4">{member.name}</h2>
                <p className="font-semibold mb-1">{member.position}</p>
              </div>
            </Card>
          ))}
        </div>
      </PetContainer>
    </div>
  );
};

export default TeamInfo;
