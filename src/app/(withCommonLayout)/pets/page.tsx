import FIndPets from "@/app/(withCommonLayout)/pets/components/FindPets";
import Title from "@/components/ui/Title";

const AllPetsPage = async () => {
  return (
    <div className="mt-5">
      <Title title="All Pets" />

      <FIndPets />
    </div>
  );
};

export default AllPetsPage;
