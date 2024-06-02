export type Species = "Dog" | "Cat" | "Rabbit" | "Bird" | "Fish";
export type Breed = {
  label: string;
  value: string;
};

export const petSpecies: { label: string; value: Species }[] = [
  { label: "Dog", value: "Dog" },
  { label: "Cat", value: "Cat" },
  { label: "Rabbit", value: "Rabbit" },
  { label: "Bird", value: "Bird" },
  { label: "Fish", value: "Fish" },
];

export const petBreeds: Record<string, { label: string; value: string }[]> = {
  Dog: [
    { label: "Labrador Retriever", value: "Labrador Retriever" },
    { label: "German Shepherd", value: "German Shepherd" },
    { label: "Golden Retriever", value: "Golden Retriever" },
    { label: "Bulldog", value: "Bulldog" },
    { label: "Beagle", value: "Beagle" },
    { label: "Poodle", value: "Poodle" },
    { label: "Rottweiler", value: "Rottweiler" },
    { label: "Yorkshire Terrier", value: "Yorkshire Terrier" },
    { label: "Boxer", value: "Boxer" },
    { label: "Dachshund", value: "Dachshund" },
  ],
  Cat: [
    { label: "Persian", value: "Persian" },
    { label: "Maine Coon", value: "Maine Coon" },
    { label: "Siamese", value: "Siamese" },
    { label: "British Shorthair", value: "British Shorthair" },
    { label: "Sphynx", value: "Sphynx" },
    { label: "Ragdoll", value: "Ragdoll" },
    { label: "Bengal", value: "Bengal" },
    { label: "Scottish Fold", value: "Scottish Fold" },
    { label: "American Shorthair", value: "American Shorthair" },
    { label: "Russian Blue", value: "Russian Blue" },
  ],
  Rabbit: [
    { label: "Netherland Dwarf", value: "Netherland Dwarf" },
    { label: "Mini Lop", value: "Mini Lop" },
    { label: "Holland Lop", value: "Holland Lop" },
    { label: "Flemish Giant", value: "Flemish Giant" },
    { label: "Lionhead", value: "Lionhead" },
    { label: "Rex", value: "Rex" },
    { label: "Angora", value: "Angora" },
    { label: "English Lop", value: "English Lop" },
    { label: "French Lop", value: "French Lop" },
    { label: "Harlequin", value: "Harlequin" },
  ],
  Bird: [
    { label: "Parakeet", value: "Parakeet" },
    { label: "Cockatiel", value: "Cockatiel" },
    { label: "Canary", value: "Canary" },
    { label: "Finch", value: "Finch" },
    { label: "Lovebird", value: "Lovebird" },
    { label: "Macaw", value: "Macaw" },
    { label: "Parrot", value: "Parrot" },
    { label: "Budgerigar", value: "Budgerigar" },
    { label: "Conure", value: "Conure" },
    { label: "Cockatoo", value: "Cockatoo" },
  ],
  Fish: [
    { label: "Goldfish", value: "Goldfish" },
    { label: "Betta", value: "Betta" },
    { label: "Guppy", value: "Guppy" },
    { label: "Angelfish", value: "Angelfish" },
    { label: "Tetra", value: "Tetra" },
    { label: "Molly", value: "Molly" },
    { label: "Platy", value: "Platy" },
    { label: "Cichlid", value: "Cichlid" },
    { label: "Discus", value: "Discus" },
    { label: "Catfish", value: "Catfish" },
  ],
};

export const petSizes: { label: string; value: string }[] = [
  { label: "Small", value: "Small" },
  { label: "Medium", value: "Medium" },
  { label: "Large", value: "Large" },
  { label: "Extra Large", value: "Extra Large" },
];

export const petGenders: { label: string; value: string }[] = [
  { label: "Male", value: "MALE" },
  { label: "Female", value: "FEMALE" },
];

export const adoptionRequirementss: { label: string; value: string }[] = [
  { label: "Fenced Yard Required", value: "Fenced Yard Required" },
  { label: "Home Visit Required", value: "Home Visit Required" },
  {
    label: "Experience with This Breed",
    value: "Experience with This Breed",
  },
  { label: "No Small Children", value: "No Small Children" },
  { label: "No Other Pets", value: "No Other Pets" },
  { label: "Must Be Indoor Only", value: "Must Be Indoor Only" },
  {
    label: "Regular Vet Checkups Required",
    value: "Regular Vet Checkups Required",
  },
  { label: "Special Diet Required", value: "Special Diet Required" },
  { label: "Job or Stable Income", value: "Job or Stable Income" },
  {
    label: "Willing to Train the Pet",
    value: "Willing to Train the Pet",
  },
];

export const temperaments: { label: string; value: string }[] = [
  { label: "Friendly", value: "Friendly" },
  { label: "Playful", value: "Playful" },
  { label: "Calm", value: "Calm" },
  { label: "Energetic", value: "Energetic" },
  { label: "Independent", value: "Independent" },
  { label: "Affectionate", value: "Affectionate" },
  { label: "Loyal", value: "Loyal" },
  { label: "Protective", value: "Protective" },
  { label: "Curious", value: "Curious" },
  { label: "Intelligent", value: "Intelligent" },
  { label: "Shy", value: "Shy" },
  { label: "Gentle", value: "Gentle" },
  { label: "Vocal", value: "Vocal" },
  { label: "Quiet", value: "Quiet" },
  { label: "Social", value: "Social" },
];

export const medicalHistories: { label: string; value: string }[] = [
  { label: "Up to date on vaccinations", value: "Up to date on vaccinations" },
  { label: "Spayed/Neutered", value: "Spayed/Neutered" },
  { label: "Microchipped", value: "Microchipped" },
  { label: "Dewormed", value: "Dewormed" },
  { label: "Dental check-up", value: "Dental check-up" },
  { label: "No known health issues", value: "No known health issues" },
  { label: "Allergic to certain foods", value: "Allergic to certain foods" },
  { label: "Had surgery", value: "Had surgery" },
  { label: "On medication", value: "On medication" },
  { label: "Previous injury", value: "Previous injury" },
  { label: "Chronic condition", value: "Chronic condition" },
  { label: "Heartworm treated", value: "Heartworm treated" },
  { label: "Ear infections treated", value: "Ear infections treated" },
];

export const specialNeeds: { label: string; value: string }[] = [
  { label: "Special Diet", value: "Special Diet" },
  { label: "Mobility Assistance", value: "Mobility Assistance" },
  { label: "Medication", value: "Medication" },
  { label: "Therapy", value: "Therapy" },
  { label: "Hearing Impaired", value: "Hearing Impaired" },
  { label: "Vision Impaired", value: "Vision Impaired" },
  { label: "Behavioral Training", value: "Behavioral Training" },
  { label: "Frequent Vet Visits", value: "Frequent Vet Visits" },
];
