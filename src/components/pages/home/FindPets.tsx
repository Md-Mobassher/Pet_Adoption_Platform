import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import SearchPets from "./SearchPets";
import FilterPets from "./FilterPets";

const FIndPets = () => {
  return (
    <div className=" py-10">
      <SearchPets />

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <FilterPets />

        <div className="flex-1 p-4">
          {/* Add main content or search results here */}
        </div>
      </div>
    </div>
  );
};

export default FIndPets;
