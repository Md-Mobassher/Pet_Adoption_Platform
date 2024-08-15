import assets from "@/assets";
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
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" pt-8 pb-5  border-t  overflow-hidden mt-5 card bg-content1">
      <div className="container mx-auto">
        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-4 gap-2 justify-between  lg:items-start md:items-start items-center px-4 pb-3 flex-wrap">
          {/* logo */}
          <div className="flex-1 mb-3 lg:text-start md:text-start text-center">
            <Link
              className="flex lg:justify-start md:justify-start justify-center items-center"
              href="/"
            >
              <Image src={assets.logo} alt="logo" className="" width={200} />
            </Link>
            <p className="mt-3 ">
              Discover your perfect furry companion with our comprehensive pet
              adoption platform, connecting loving homes with adorable pets in
              need. Find your new best friend today!
            </p>
          </div>

          {/* contact */}
          <div className="flex flex-1 flex-col gap-5 justify-start items-center pb-5 ml-5">
            <h1 className="text-2xl font-bold text-center">
              <span className="text-primary">Contact </span> Info
            </h1>
            <div className="lg:mt-3 md:mt-3">
              <h1 className=" flex gap-5 mb-3">
                <span>
                  <MailOpen className="size-6 " />
                </span>
                mdmobassherhossain1@gmail.com
              </h1>
              <h1 className=" flex gap-5 mb-3">
                <span>
                  <Smartphone className="size-6 " />
                </span>
                +8801706060647
              </h1>
              <h1 className=" flex gap-5 mb-3">
                <span>
                  <MapPin className="size-6 " />
                </span>
                Rajarhat, Kurigram, Bangladesh-5600
              </h1>
            </div>
          </div>

          {/* link */}
          <div className="flex flex-1 flex-col gap-5 justify-center items-center pb-5 min-w-32">
            <h1 className="text-2xl font-bold text-center">
              <span className="text-primary">Link</span>
            </h1>
            <div className="justify-start items-center lg:mt-3 md:mt-3">
              <div className="flex flex-col gap-1 ">
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
                <Link href="/pets" className="hover:text-primary">
                  Pets
                </Link>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
                <Link href="/login" className="hover:text-primary">
                  Login
                </Link>
              </div>
            </div>
          </div>

          {/* social media */}
          <div className="flex flex-1 flex-col gap-5 justify-center items-center pb-5">
            <h1 className="text-2xl font-bold text-center">
              <span className="text-primary">Social</span> Media
            </h1>
            <div className="flex gap-4 justify-center items-center mt-3">
              <Link
                href="https://www.facebook.com/mdmobassherf"
                target="_blank"
              >
                <Facebook className="border text-primary border-primary hover:bg-primary hover:text-white lg:size-9 md:size-8 size-7 rounded" />
              </Link>
              <Link
                href="https://www.facebook.com/mdmobassherf"
                target="_blank"
              >
                <Linkedin className="border text-primary border-primary hover:bg-primary hover:text-white lg:size-9 md:size-8 size-7 rounded" />
              </Link>
              <Link
                href="https://www.facebook.com/mdmobassherf"
                target="_blank"
              >
                <Github className="border text-primary border-primary hover:bg-primary hover:text-white lg:size-9 md:size-8 size-7 rounded" />
              </Link>
              <Link
                href="https://www.facebook.com/mdmobassherf"
                target="_blank"
              >
                <Twitter className="border text-primary border-primary hover:bg-primary hover:text-white lg:size-9 md:size-8 size-7 rounded" />
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
              href="https://mobassher.vercel.app"
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
