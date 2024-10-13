import { userInfo } from "../../actions/auth";
import PetDetails from "./PetDetails";

type TProps = {
  params: { petId: string };
};

const PetDetailsPage = async ({ params }: TProps) => {
  const user = await userInfo();

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 mt-8">
        Pet <span className="text-primary">Details</span>
      </h1>
      <PetDetails petId={params.petId} />
    </div>
  );
};

export default PetDetailsPage;
