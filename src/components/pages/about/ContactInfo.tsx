import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {
  Facebook,
  Github,
  Linkedin,
  MailOpen,
  MapPin,
  Smartphone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="py-10">
      <div>
        <h1 className="text-4xl font-bold text-center mb-6">
          <span className="text-primary">Contact</span> Information
        </h1>
        <p className="lg:text-lg text-md mb-2 max-w-4xl text-center mx-auto">
          We would love to hear from you! Reach out to us through any of the
          following channels
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2  gap-5 my-10 mx-auto">
        <Card className=" max-w-sm hover:text-primary">
          <CardBody className="p-6 text-center">
            <MailOpen className="w-20 h-20 mx-auto mb-5" />
            <h5 className="font-bold text-xl text-primary text-center mb-3">
              Email{" "}
            </h5>
            <p className="font-semibold ">mdmobassherhossain1@gmail.com</p>
          </CardBody>
        </Card>
        <Card className=" max-w-sm hover:text-primary">
          <CardBody className="p-6 text-center">
            <Smartphone className="w-20 h-20 mx-auto mb-5" />
            <h5 className="font-bold text-xl text-primary text-center mb-3">
              phone
            </h5>
            <p className="font-semibold ">+8801706060647</p>
          </CardBody>
        </Card>
        <Card className=" max-w-sm hover:text-primary">
          <CardBody className="p-6 text-center">
            <MapPin className="w-20 h-20 mx-auto mb-5" />
            <h5 className="font-bold text-xl text-primary text-center mb-3">
              Location
            </h5>
            <p className="font-semibold ">
              Rajarhat, Kurigram, Bangladesh-5600
            </p>
          </CardBody>
        </Card>
      </div>

      {/* social media */}
      <div className="flex gap-10 justify-center">
        <h1 className="text-2xl font-bold text-center mb-6">
          <span className="text-primary">Follow us </span> on social media
        </h1>
        <div className="flex gap-4">
          <Link href="https://www.facebook.com/mdmobassherf" target="_blank">
            <Facebook className="border text-primary border-primary hover:bg-primary hover:text-white size-10 rounded" />
          </Link>
          <Link href="https://www.facebook.com/mdmobassherf" target="_blank">
            <Linkedin className="border text-primary border-primary hover:bg-primary hover:text-white size-10 rounded" />
          </Link>
          <Link href="https://www.facebook.com/mdmobassherf" target="_blank">
            <Github className="border text-primary border-primary hover:bg-primary hover:text-white size-10 rounded" />
          </Link>
          <Link href="https://www.facebook.com/mdmobassherf" target="_blank">
            <Twitter className="border text-primary border-primary hover:bg-primary hover:text-white size-10 rounded" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
