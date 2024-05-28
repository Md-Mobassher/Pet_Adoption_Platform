"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function creteAPet(pre: FormData, formData: FormData) {
  try {
    // const newFormData = {
    //   ...Object?.fromEntries(formData),
    //   rating: Number(Object?.fromEntries(formData).rating),
    //   passengerCapacity: Number(
    //     Object?.fromEntries(formData).passengerCapacity
    //   ),
    // };
    console.log(formData);
    const formattedData = JSON.stringify(formData);

    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${process.env.serverUrl}/pets/create`, {
      method: "POST",
      headers: headers,
      body: formattedData,
    });
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
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${process.env.serverUrl}/Pets/${PetId}`, {
      method: "PATCH",

      headers: headers,
      body: formattedData,
    });
    revalidateTag("Pets");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deletePet(PetId: string) {
  try {
    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${process.env.serverUrl}/Pets/${PetId}`, {
      method: "DELETE",
      headers: headers,
    });
    revalidateTag("Pets");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
