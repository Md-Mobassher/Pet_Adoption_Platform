export type Species = "dog" | "cat" | "rabbit" | "bird" | "fish";
export type Breed = {
  label: string;
  value: string;
};

export const petSpecies: { label: string; value: Species }[] = [
  { label: "Dog", value: "dog" },
  { label: "Cat", value: "cat" },
  { label: "Rabbit", value: "rabbit" },
  { label: "Bird", value: "bird" },
  { label: "Fish", value: "fish" },
];

export const petBreeds: Record<Species, Breed[]> = {
  dog: [
    { label: "Labrador Retriever", value: "labrador_retriever" },
    { label: "German Shepherd", value: "german_shepherd" },
    { label: "Golden Retriever", value: "golden_retriever" },
    { label: "Bulldog", value: "bulldog" },
    { label: "Beagle", value: "beagle" },
    { label: "Poodle", value: "poodle" },
    { label: "Rottweiler", value: "rottweiler" },
    { label: "Yorkshire Terrier", value: "yorkshire_terrier" },
    { label: "Boxer", value: "boxer" },
    { label: "Dachshund", value: "dachshund" },
  ],
  cat: [
    { label: "Persian", value: "persian" },
    { label: "Maine Coon", value: "maine_coon" },
    { label: "Siamese", value: "siamese" },
    { label: "British Shorthair", value: "british_shorthair" },
    { label: "Sphynx", value: "sphynx" },
    { label: "Ragdoll", value: "ragdoll" },
    { label: "Bengal", value: "bengal" },
    { label: "Scottish Fold", value: "scottish_fold" },
    { label: "American Shorthair", value: "american_shorthair" },
    { label: "Russian Blue", value: "russian_blue" },
  ],
  rabbit: [
    { label: "Netherland Dwarf", value: "netherland_dwarf" },
    { label: "Mini Lop", value: "mini_lop" },
    { label: "Holland Lop", value: "holland_lop" },
    { label: "Flemish Giant", value: "flemish_giant" },
    { label: "Lionhead", value: "lionhead" },
    { label: "Rex", value: "rex" },
    { label: "Angora", value: "angora" },
    { label: "English Lop", value: "english_lop" },
    { label: "French Lop", value: "french_lop" },
    { label: "Harlequin", value: "harlequin" },
  ],
  bird: [
    { label: "Parakeet", value: "parakeet" },
    { label: "Cockatiel", value: "cockatiel" },
    { label: "Canary", value: "canary" },
    { label: "Finch", value: "finch" },
    { label: "Lovebird", value: "lovebird" },
    { label: "Macaw", value: "macaw" },
    { label: "Parrot", value: "parrot" },
    { label: "Budgerigar", value: "budgerigar" },
    { label: "Conure", value: "conure" },
    { label: "Cockatoo", value: "cockatoo" },
  ],
  fish: [
    { label: "Goldfish", value: "goldfish" },
    { label: "Betta", value: "betta" },
    { label: "Guppy", value: "guppy" },
    { label: "Angelfish", value: "angelfish" },
    { label: "Tetra", value: "tetra" },
    { label: "Molly", value: "molly" },
    { label: "Platy", value: "platy" },
    { label: "Cichlid", value: "cichlid" },
    { label: "Discus", value: "discus" },
    { label: "Catfish", value: "catfish" },
  ],
};

export const petSizes: { label: string; value: string }[] = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
  { label: "Extra Large", value: "extra_large" },
];

export const adoptionRequirements: { label: string; value: string }[] = [
  { label: "Fenced Yard Required", value: "fenced_yard" },
  { label: "Home Visit Required", value: "home_visit" },
  {
    label: "Adopter Must Have Experience with This Breed",
    value: "experience_with_breed",
  },
  { label: "No Small Children", value: "no_small_children" },
  { label: "No Other Pets", value: "no_other_pets" },
  { label: "Must Be Indoor Only", value: "indoor_only" },
  { label: "Regular Vet Checkups Required", value: "regular_vet_checkups" },
  { label: "Special Diet Required", value: "special_diet" },
  { label: "Adopter Must Have a Job or Stable Income", value: "stable_income" },
  {
    label: "Adopter Must Be Willing to Train the Pet",
    value: "willing_to_train",
  },
];

export const temperaments: { label: string; value: string }[] = [
  { label: "Friendly", value: "friendly" },
  { label: "Playful", value: "playful" },
  { label: "Calm", value: "calm" },
  { label: "Energetic", value: "energetic" },
  { label: "Independent", value: "independent" },
  { label: "Affectionate", value: "affectionate" },
  { label: "Loyal", value: "loyal" },
  { label: "Protective", value: "protective" },
  { label: "Curious", value: "curious" },
  { label: "Intelligent", value: "intelligent" },
  { label: "Shy", value: "shy" },
  { label: "Gentle", value: "gentle" },
  { label: "Vocal", value: "vocal" },
  { label: "Quiet", value: "quiet" },
  { label: "Social", value: "social" },
];

export const medicalHistories: { label: string; value: string }[] = [
  { label: "Up to date on vaccinations", value: "up_to_date_vaccinations" },
  { label: "Spayed/Neutered", value: "spayed_neutered" },
  { label: "Microchipped", value: "microchipped" },
  { label: "Dewormed", value: "dewormed" },
  { label: "Dental check-up", value: "dental_check_up" },
  { label: "No known health issues", value: "no_known_health_issues" },
  { label: "Allergic to certain foods", value: "allergic_certain_foods" },
  { label: "Had surgery", value: "had_surgery" },
  { label: "On medication", value: "on_medication" },
  { label: "Previous injury", value: "previous_injury" },
  { label: "Chronic condition", value: "chronic_condition" },
  { label: "Heartworm treated", value: "heartworm_treated" },
  { label: "Ear infections treated", value: "ear_infections_treated" },
];
