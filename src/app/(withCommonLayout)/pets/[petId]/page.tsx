type TProps = {
  params: { petId: string };
};

const PetDetailsPage = async ({ params }: TProps) => {
  const res = await fetch(`${process.env.serverUrl}/pets/${params.petId}`, {
    next: {
      tags: ["pet"],
    },
  });
  const { data, error } = await res.json();
  console.log(error);

  return (
    <div>
      <h1>This is PetDetailsPage component</h1>
    </div>
  );
};

export default PetDetailsPage;
