import { Card, CardBody } from "@nextui-org/card";
import BannerButton from "./BannerButton";
import BannerImage from "./BannerImage";

export default function Banner() {
  return (
    <Card className="lg:py-10 py-4 flex lg:px-4 px-3" shadow="none">
      <CardBody className="overflow-visible py-2 ">
        <div className="lg:flex md:flex items-center justify-between gap-10 w-full">
          <BannerImage />
          <div className="lg:w-2/5 md:w-2/3">
            <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
              Find Your Perfect <span className="text-primary">Pet</span>{" "}
              Companion Today!
            </h1>
            <h4 className=" lg:text-xl text-md text-gray-500 my-5">
              Explore our extensive network of shelters and rescues to find your
              new best friend. With our easy-to-use platform, you can browse,
              connect, and adopt your ideal pet with just a few clicks. Start
              your journey towards a loving home and a happy pet now!
            </h4>
            <div className="flex lg:justify-start md:justify-start justify-center">
              <BannerButton />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
