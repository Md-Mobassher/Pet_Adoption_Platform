"use client";

import LoadingPage from "@/app/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PetDetails = ({
  accessToken,
  petId,
}: {
  accessToken: string | undefined;
  petId: string;
}) => {
  const router = useRouter();
  const [petData, setPetData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!accessToken) {
      router.push("/login"); // Redirect to login page if not logged in
      return;
    }

    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${petId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${accessToken}`,
            },
            cache: "no-store",
          }
        );
        const data = await res.json();
        setPetData(data);
      } catch (error) {
        console.error("Error fetching pet data:", error);
        // Handle error appropriately, e.g., show error message
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [petId]);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1>This is PetDetails component</h1>
    </div>
  );
};

export default PetDetails;
