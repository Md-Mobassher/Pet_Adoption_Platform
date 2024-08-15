import FIndPets from "@/app/(withCommonLayout)/pets/components/FindPets";

const AllPetsPage = async () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-5">
        All <span className="text-primary">Pets</span>
      </h1>

      <FIndPets />
    </div>
  );
};

export default AllPetsPage;
