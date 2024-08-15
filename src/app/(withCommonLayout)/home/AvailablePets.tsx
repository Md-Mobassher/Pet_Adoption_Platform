"use client";
import PetContainer from "@/components/ui/PetContainer";
import SearchPets from "./SearchPets";
import { useEffect, useState } from "react";
import { SearchCriteria, TPet } from "./FindPets";
import LoadingPage from "@/app/loading";
import PetCard from "../pets/components/PetCard";

const AvailablePets = () => {
  const [pets, setPets] = useState<TPet[]>([]);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPets = async () => {
    try {
      const params = new URLSearchParams();

      Object.entries({ ...searchCriteria }).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => params.append(key, val));
        } else if (value) {
          params.append(key, value);
        }
      });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?${params.toString()}`,
        {
          cache: "no-store",
        }
      );

      const result = await res.json();
      // console.log(result);

      if (result.data) {
        setPets(result.data);
        setLoading(false);
      } else {
        setPets([]);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setError("Failed to fetch pets");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [searchCriteria]);

  const handleSearch = (criteria: SearchCriteria) => {
    setSearchCriteria(criteria);
  };

  return (
    <div className="mb-5">
      <PetContainer>
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
            <span className="text-primary">Animals</span> Available For
          </h1>
          <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start md:text-start text-center font-bold mb-2 text-default-800 ">
            Adoption Near You
          </h1>
        </div>

        {/*available pets */}
        <div className="lg:mt-8 md:mt-7 mt-5">
          <SearchPets onSearch={handleSearch} />
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="">
              {loading ? (
                <LoadingPage />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-5 p-3">
                  {pets.length > 0 ? (
                    pets
                      ?.slice(0, 6)
                      .map((item: TPet) => <PetCard key={item.id} {...item} />)
                  ) : (
                    <div className="text-center">
                      <p className="text-red-500 text-xl font-semibold">
                        No pets found
                      </p>
                    </div>
                  )}
                </div>
              )}

              {error && <p className="text-red-600">{error}</p>}
            </div>
          </div>
        </div>
      </PetContainer>
    </div>
  );
};

export default AvailablePets;
