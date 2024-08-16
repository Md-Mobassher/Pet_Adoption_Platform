import { TPet } from "@/app/(withCommonLayout)/pets/components/FindPets";

export const getAnalytics = (pets: TPet[]) => {
  const analytics = {
    allPets: pets.length,
    dogs: 0,
    cats: 0,
    rabbits: 0, // Corrected spelling
    birds: 0,
    fishes: 0, // No data for fishes, but included for completeness
    totalMale: 0,
    totalFemale: 0,
    totalSmall: 0,
    totalMedium: 0,
    totalLarge: 0,
    totalExtraLarge: 0,
  };

  pets.forEach((pet) => {
    // Count species
    if (pet.species === "Dog") analytics.dogs++;
    if (pet.species === "Cat") analytics.cats++;
    if (pet.species === "Rabbit") analytics.rabbits++;
    if (pet.species === "Bird") analytics.birds++;
    if (pet.species === "Fish") analytics.fishes++;

    // Count gender
    if (pet.gender === "MALE") analytics.totalMale++;
    if (pet.gender === "FEMALE") analytics.totalFemale++;

    // Count size
    if (pet.size === "Small") analytics.totalSmall++;
    if (pet.size === "Medium") analytics.totalMedium++;
    if (pet.size === "Large") analytics.totalLarge++;
    if (pet.size === "Extra Large") analytics.totalExtraLarge++;
  });

  return analytics;
};
