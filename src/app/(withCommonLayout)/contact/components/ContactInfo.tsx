import assets from "@/assets";
import PetContainer from "@/components/ui/PetContainer";
import SubTitle from "@/components/ui/SubTitle";
import Title from "@/components/ui/Title";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="py-10">
      <PetContainer>
        <Title title="Contact Information" />
        <SubTitle
          title="We would love to hear from you! Reach out to us through any of the
          following channels"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-8 gap-6 lg:mt-10 md:mt-8 mt-6">
          <div className="w-[95%] mx-auto lg:w-full md:w-full flex justify-evenly items-center gap-5 lg:p-8 md:p-8 p-6 rounded-lg shadow-xl border border-slate-200">
            <div className="flex flex-col gap-4 justify-center items-center">
              <Image
                src={assets.icons.email}
                alt={"Memberships"}
                width={100}
                height={100}
              />
              <h5 className="font-bold text-xl text-primary text-center">
                Email{" "}
              </h5>
              <p className="font-semibold ">mdmobassherhossain1@gmail.com</p>
            </div>
          </div>
          <div className="w-[95%] mx-auto lg:w-full md:w-full flex justify-evenly items-center gap-5 lg:p-8 md:p-8 p-6 rounded-lg shadow-xl border border-slate-200">
            <div className="flex flex-col gap-4 justify-center items-center">
              <Image
                src={assets.icons.whatsapp}
                alt={"Memberships"}
                width={100}
                height={100}
              />
              <h5 className="font-bold text-xl text-primary text-center">
                Call / WhatsApp
              </h5>
              <p className="font-semibold ">+8801706060647</p>
            </div>
          </div>
          <div className="w-[95%] mx-auto lg:w-full md:w-full flex justify-evenly items-center gap-5 lg:p-8 md:p-8 p-6 rounded-lg shadow-xl border border-slate-200">
            <div className="flex flex-col gap-4 justify-center items-center">
              <Image
                src={assets.icons.location}
                alt={"Memberships"}
                width={100}
                height={100}
              />
              <h5 className="font-bold text-xl text-primary text-center">
                Location
              </h5>
              <p className="font-semibold ">
                {" "}
                Rajarhat, Kurigram, Bangladesh-5600
              </p>
            </div>
          </div>
        </div>
      </PetContainer>

      {/* social media */}
      <div className="flex gap-10 justify-center">
        <h1 className="text-2xl font-bold text-center mb-6">
          <span className="text-primary">Follow us </span> on social media
        </h1>
        <div className="flex gap-4">
          <Link href="https://www.facebook.com/mdmobassherf" target="_blank">
            <Image
              src={assets.icons.facebook}
              alt={"facebook"}
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/md-mobassher" target="_blank">
            <Image
              src={assets.icons.linkedIn}
              alt={"facebook"}
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://github.com/Md-Mobassher" target="_blank">
            <Image
              src={assets.icons.github}
              alt={"facebook"}
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://twitter.com/md_mobasshert" target="_blank">
            <Image
              src={assets.icons.twitter}
              alt={"facebook"}
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
