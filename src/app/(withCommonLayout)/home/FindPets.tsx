"use client";

import { useState, useEffect } from "react";
import SearchPets from "./SearchPets";
import FilterPets from "./FilterPets";
import PetCard from "../pets/components/PetCard";
import LoadingPage from "@/app/loading";

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

type SearchCriteria = {
  species?: string;
  breed?: string;
  age?: string;
  location?: string;
};

type FilterCriteria = {
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
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPets = async () => {
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
  }, [searchCriteria, filterCriteria]);

  const handleSearch = (criteria: SearchCriteria) => {
    setSearchCriteria(criteria);
  };

  const handleFilter = (criteria: FilterCriteria) => {
    setFilterCriteria(criteria);
  };

  return (
    <div className="py-5">
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
                  ?.slice(0, 6)
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
    </div>
  );
};

export default FindPets;
