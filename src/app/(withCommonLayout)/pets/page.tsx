import FIndPets from "@/app/(withCommonLayout)/pets/components/FindPets";
import Title from "@/components/ui/Title";

const AllPetsPage = async () => {
  return (
    <div className="mt-5">
      {/* <h1 className="text-4xl font-bold text-center mt-5">
        All <span className="text-primary">Pets</span>
      </h1> */}
      <Title title="All Pets" />

      <FIndPets />
    </div>
  );
};

export default AllPetsPage;
