import FIndPets from "@/components/pages/home/FindPets";

const AllPetsPage = async () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6 mt-8">
        All <span className="text-primary">Pets</span>
      </h1>

      <FIndPets />
    </div>
  );
};

export default AllPetsPage;
