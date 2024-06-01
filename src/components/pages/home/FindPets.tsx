"use client";

import { useState, useEffect } from "react";
import SearchPets from "./SearchPets";
import FilterPets from "./FilterPets";
import PetCard from "../pets/PetCard";

export type TPet = {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  size: string;
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
  specialNeeds?: string;
};

const FindPets = () => {
  const [pets, setPets] = useState<TPet[]>([]);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({});
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({});
  const [error, setError] = useState<string | null>(null);

  const fetchPets = async () => {
    try {
      const params = new URLSearchParams({
        ...searchCriteria,
        ...filterCriteria,
      });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?${params.toString()}`,
        {
          cache: "no-store",
        }
      );

      const result = await res.json();
      console.log(result);

      if (result.data) {
        setPets(result.data);
      } else {
        setPets([]);
      }
    } catch (err) {
      setError("Failed to fetch pets");
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
    <div className="py-10">
      <SearchPets onSearch={handleSearch} />
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <FilterPets onFilter={handleFilter} />
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
            {error ? (
              <p className="text-red-600">{error}</p>
            ) : pets.length > 0 ? (
              pets.map((item) => <PetCard key={item.id} {...item} />)
            ) : (
              <p>No pets found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPets;
