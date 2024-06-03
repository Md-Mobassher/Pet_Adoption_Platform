import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import ceo from "@/assets/team/ceo.jpg";
import cto from "@/assets/team/cto.jpg";
import adc from "@/assets/team/adc.jpg";
import ms from "@/assets/team/ms.jpg";

const TeamInfo = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="lg:text-4xl text-3xl  font-bold text-center mb-6">
          <span className="text-primary">Team</span> Information
        </h1>
        <p className="lg:text-lg text-md mb-2 max-w-4xl text-center mx-auto">
          Our team is passionate about animal welfare and dedicated to making
          the adoption process as easy and effective as possible. Meet the
          people behind the platform:
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5 my-10">
        <Card className=" max-w-sm hover:text-primary">
          <div className="w-full h-[380px] flex">
            <Image src={ceo} alt="ceo image" width={400} height={380} />
          </div>
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-2 ">Md Mubarrat Hossain</h2>
            <p className="font-semibold ">Founder & CEO </p>
          </CardBody>
        </Card>

        <Card className=" max-w-sm hover:text-primary">
          <div className="w-full h-[380px] flex">
            <Image src={cto} alt="ceo image" width={400} height={380} />
          </div>
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-2 ">Mubarrat Hossain Raiyan</h2>
            <p className="font-semibold ">Chief Technology Officer </p>
          </CardBody>
        </Card>

        <Card className=" max-w-sm hover:text-primary">
          <div className="w-full h-[380px] flex">
            <Image src={adc} alt="ceo image" width={400} height={380} />
          </div>
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-2 ">Mr Raiyan</h2>
            <p className="font-semibold ">Adoption Coordinator</p>
          </CardBody>
        </Card>
        <Card className=" max-w-sm hover:text-primary">
          <div className="w-full h-[380px] flex">
            <Image src={ms} alt="ceo image" width={400} height={380} />
          </div>
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-2 ">Raiyan Babu</h2>
            <p className="font-semibold ">Marketing Specialist</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default TeamInfo;
