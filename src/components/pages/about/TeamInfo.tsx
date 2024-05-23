import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import ceo from "@/assets/images/cat-8540772_640.jpg";

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
          <Image src={ceo} alt="ceo image" width={400} height={250} />
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-2 ">Md Mobassher Hossain</h2>
            <p className="font-semibold ">Founder & CEO </p>
          </CardBody>
        </Card>

        <Card className=" max-w-sm hover:text-primary">
          <Image src={ceo} alt="ceo image" width={400} height={250} />
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-2 ">Md Mobassher Hossain</h2>
            <p className="font-semibold ">Chief Technology Officer </p>
          </CardBody>
        </Card>

        <Card className=" max-w-sm hover:text-primary">
          <Image src={ceo} alt="ceo image" width={400} height={250} />
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-2 ">Md Mobassher Hossain</h2>
            <p className="font-semibold ">Adoption Coordinator</p>
          </CardBody>
        </Card>
        <Card className=" max-w-sm hover:text-primary">
          <Image src={ceo} alt="ceo image" width={400} height={250} />
          <CardBody className="p-6">
            <h2 className="text-xl font-bold mb-2 ">Md Mobassher Hossain</h2>
            <p className="font-semibold ">Marketing Specialist</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default TeamInfo;
