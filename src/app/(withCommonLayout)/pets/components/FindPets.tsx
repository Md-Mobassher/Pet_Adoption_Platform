"use client";

import { useState, useEffect } from "react";
import SearchPets from "./SearchPets";
import FilterPets from "./FilterPets";
import PetCard from "./PetCard";
import LoadingPage from "@/app/loading";
import PetContainer from "@/components/ui/PetContainer";

export type TPet = {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  size: string;
  gender: string;
  location: string;
  description: string;
  temperament: string[];
  medicalHistory: string[];
  adoptionRequirements: string[];
  image: string;
};

export type SearchCriteria = {
  species?: string;
  breed?: string;
  age?: string;
  location?: string;
};

export type FilterCriteria = {
  size?: string;
  gender?: string;
  medicalHistory?: string[];
  temperament?: string[];
  adoptionRequirements?: string[];
};

const FindPets = () => {
  const [pets, setPets] = useState<TPet[]>([]);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({});
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Start as false

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true); // Start loading before fetching
      setError(null); // Reset error state

      try {
        const params = new URLSearchParams();

        Object.entries({ ...searchCriteria, ...filterCriteria }).forEach(
          ([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((val) => params.append(key, val));
            } else if (value) {
              params.append(key, value);
            }
          }
        );

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?${params.toString()}`,
          {
            cache: "no-store",
          }
        );

        const result = await res.json();

        if (result.data) {
          setPets(result.data);
        } else {
          setPets([]);
        }
      } catch (err) {
        console.log(err);
        setError("Failed to fetch pets");
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchPets();
  }, [searchCriteria, filterCriteria]);

  const handleSearch = (criteria: SearchCriteria) => {
    setSearchCriteria(criteria);
  };

  const handleFilter = (criteria: FilterCriteria) => {
    setFilterCriteria(criteria);
  };

  return (
    <div className="-mt-5">
      <PetContainer>
        <SearchPets onSearch={handleSearch} />
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <FilterPets onFilter={handleFilter} />
          <div className="flex-1">
            {loading ? (
              <LoadingPage />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                {pets.length > 0 ? (
                  pets
                    .slice(0, 9)
                    .map((item) => <PetCard key={item.id} {...item} />)
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
      </PetContainer>
    </div>
  );
};

export default FindPets;
