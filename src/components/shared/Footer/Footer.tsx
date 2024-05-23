import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-2  border-t  overflow-hidden  ">
      <div className="container mx-auto p-5 flex flex-wrap lg:justify-between justify-center items-center">
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
    </footer>
  );
};

export default Footer;
