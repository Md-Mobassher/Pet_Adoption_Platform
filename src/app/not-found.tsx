import { Button } from "@nextui-org/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-red-500 text-center">404 !!!</h1>
        <h1 className="text-7xl font-bold text-red-500  text-center mt-10">
          Page not found!
        </h1>
        <Link href={`/`}>
          <Button
            color="primary"
            variant="solid"
            radius="sm"
            className="hover:bg-primary hover:text-white mt-10"
            size="md"
          >
            Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
