import FIndPets from "@/components/pages/home/FindPets";
import PetCard from "@/components/pages/pets/PetCard";

const AllPetsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets?`, {
    next: {
      tags: ["pets"],
    },
  });
  const { data } = await res.json();
  // console.log(data);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6 mt-8">
        All <span className="text-primary">Pets</span>
      </h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data && data?.map((item: any) => <PetCard key={item.id} {...item} />)}
      </div> */}
      <FIndPets />
    </div>
  );
};

export default AllPetsPage;
