"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function creteAPet(pre: FormData, formData: FormData) {
  try {
    const formattedData = JSON.stringify(formData);
    const accessToken = cookies().get("accessToken")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
        body: formattedData,
        cache: "no-store",
      }
    );
    revalidateTag("Pets");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updatePet(
  PetId: string,
  pre: FormData,
  formData: FormData
) {
  try {
    const formattedData = JSON.stringify(formData);
    const accessToken = cookies().get("accessToken")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/Pets/${PetId}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
        body: formattedData,
      }
    );
    revalidateTag("Pets");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deletePet(PetId: string) {
  try {
    console.log(PetId);
    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/Pets/${PetId}`,
      {
        method: "DELETE",
        headers: headers,
      }
    );
    revalidateTag("Pets");
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function petAnalytic() {
  try {
    const accessToken = cookies().get("accessToken")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/analytics`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
        cache: "no-store",
      }
    );
    revalidateTag("pets");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
