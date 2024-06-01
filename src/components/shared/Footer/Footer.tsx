import {
  Cat,
  Facebook,
  Github,
  Linkedin,
  MailOpen,
  MapPin,
  Smartphone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" pt-8 pb-5  border-t  overflow-hidden  mt-10">
      <div className="container mx-auto">
        <div className="lg:flex md:flex  gap-5  justify-between  lg:items-start md:items-start items-center px-4 pb-3">
          <div className="flex-1 mb-3 lg:text-start md:text-start text-center">
            <Link
              className="flex lg:justify-start md:justify-start justify-center items-center"
              href="/"
            >
              <Cat className="size-8 mr-2 text-primary" />
              <h1 className="font-bold lg:text-3xl text-2xl text-inherit">
                <span className="text-primary">Pet</span> Adoption Platform
              </h1>
            </Link>
            <p className="mt-3">
              Discover your perfect furry companion with our comprehensive pet
              adoption platform, connecting loving homes with adorable pets in
              need. Find your new best friend today!
            </p>
          </div>

          <div className="flex-1 flex-col gap-5 justify-center items-center pb-5 ml-5">
            <h1 className="text-2xl font-bold text-center">
              <span className="text-primary">Contact </span> Info
            </h1>
            <div className="mt-3">
              <h1 className="font-semibold flex gap-5 mb-3">
                <span>
                  <MailOpen className="size-6 " />
                </span>
                mdmobassherhossain1@gmail.com
              </h1>
              <h1 className="font-semibold flex gap-5 mb-3">
                <span>
                  <Smartphone className="size-6 " />
                </span>
                +8801706060647
              </h1>
              <h1 className="font-semibold flex gap-5 mb-3">
                <span>
                  <MapPin className="size-6 " />
                </span>
                Rajarhat, Kurigram, Bangladesh-5600
              </h1>
            </div>
          </div>
          <div className="flex-1 flex-col gap-5 justify-center items-center pb-5">
            <h1 className="text-2xl font-bold text-center">
              <span className="text-primary">Follow us </span> on social media
            </h1>
            <div className="flex gap-4 justify-center items-center mt-3">
              <Link
                href="https://www.facebook.com/mdmobassherf"
                target="_blank"
              >
                <Facebook className="border text-primary border-primary hover:bg-primary hover:text-white size-10 rounded" />
              </Link>
              <Link
                href="https://www.facebook.com/mdmobassherf"
                target="_blank"
              >
                <Linkedin className="border text-primary border-primary hover:bg-primary hover:text-white size-10 rounded" />
              </Link>
              <Link
                href="https://www.facebook.com/mdmobassherf"
                target="_blank"
              >
                <Github className="border text-primary border-primary hover:bg-primary hover:text-white size-10 rounded" />
              </Link>
              <Link
                href="https://www.facebook.com/mdmobassherf"
                target="_blank"
              >
                <Twitter className="border text-primary border-primary hover:bg-primary hover:text-white size-10 rounded" />
              </Link>
            </div>
          </div>
        </div>

        {/* border -bottom */}
        <div className="container mx-auto pt-5 flex flex-wrap lg:justify-between justify-center items-center border-t-1">
          <p className="text-center">
            Copyright &copy; {new Date().getFullYear()} All Right regerved to{" "}
            <span className="text-primary">Pet Adoption Platform</span>
          </p>
          <p className="text-center">
            Design & Developed by{" "}
            <Link
              href="https://dev-mobassher.web.app"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              Md Mobassher Hossain
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
