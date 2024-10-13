"use server";

import { getCooke, logOut } from "@/app/(withCommonLayout)/actions/auth";
import { revalidateTag } from "next/cache";

export async function updateAdoptionStatus(
  adoptionId: string,
  pre: FormData,
  formData: FormData
) {
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    const accessToken = await getCooke("accessToken");
    if (!accessToken) {
      return logOut();
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-requests/${adoptionId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
        body: formattedData,
        cache: "no-store",
      }
    );
    revalidateTag("pets");
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
