"use client";

import { useState, useEffect } from "react";
import SearchPets from "./SearchPets";
import FilterPets from "./FilterPets";
import PetCard from "./PetCard";
import LoadingPage from "@/app/loading";
import PetContainer from "@/components/ui/PetContainer";
import { Pagination } from "@nextui-org/pagination";

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
  const [loading, setLoading] = useState<boolean>(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();

        // Append search and filter criteria
        Object.entries({ ...searchCriteria, ...filterCriteria }).forEach(
          ([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((val) => params.append(key, val));
            } else if (value) {
              params.append(key, value);
            }
          }
        );

        // Append pagination parameters
        params.append("page", currentPage.toString());
        params.append("limit", limit.toString());

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
          setTotalPages(Math.ceil(result.meta.total / limit)); // Calculate total pages
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
  }, [searchCriteria, filterCriteria, currentPage, limit]); // Fetch pets when criteria or page changes

  const handleSearch = (criteria: SearchCriteria) => {
    setSearchCriteria(criteria);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleFilter = (criteria: FilterCriteria) => {
    setFilterCriteria(criteria);
    setCurrentPage(1); // Reset to first page on new filter
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update current page
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
                  pets.map((item) => <PetCard key={item.id} {...item} />)
                ) : (
                  <div className="text-center">
                    <p className="text-red-500 text-xl font-semibold">
                      No pets found
                    </p>
                  </div>
                )}
                {pets.length > 0 && (
                  <div className="pt-7">
                    <Pagination
                      showControls
                      total={totalPages}
                      initialPage={currentPage}
                      onChange={handlePageChange} // Handle page change
                    />
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
