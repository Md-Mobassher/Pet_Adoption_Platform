import { getCooke } from "../../actions/auth";
import PetDetails from "./PetDetails";

type TProps = {
  params: { petId: string };
};

const PetDetailsPage = async ({ params }: TProps) => {
  const accessToken = await getCooke("accessToken");
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6 mt-8">
        Pet <span className="text-primary">Details</span>
      </h1>
      <PetDetails accessToken={accessToken} petId={params.petId} />
    </div>
  );
};

export default PetDetailsPage;
