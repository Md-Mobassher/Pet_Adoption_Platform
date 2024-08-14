import FIndPets from "@/app/(withCommonLayout)/home/FindPets";

const AllPetsPage = async () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center lg:mb-6 mb-0 mt-8">
        All <span className="text-primary">Pets</span>
      </h1>

      <FIndPets />
    </div>
  );
};

export default AllPetsPage;
