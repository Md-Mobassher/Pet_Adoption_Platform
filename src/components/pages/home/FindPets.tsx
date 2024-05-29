import SearchPets from "./SearchPets";
import FilterPets from "./FilterPets";
import PetCard from "../pets/PetCard";

const FIndPets = async () => {
  const res = await fetch(`${process.env.serverUrl}/pets?`, {
    next: {
      tags: ["pets"],
    },
    cache: "no-store",
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <div className=" py-10">
      <SearchPets />

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <FilterPets />

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
            {data &&
              data?.map((item: any) => <PetCard key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIndPets;
