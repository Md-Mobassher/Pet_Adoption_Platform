const PetContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container mx-auto lg:py-12 md:py-10 py-8 lg:px-8 md:px-6  px-4">
      {children}
    </div>
  );
};

export default PetContainer;
