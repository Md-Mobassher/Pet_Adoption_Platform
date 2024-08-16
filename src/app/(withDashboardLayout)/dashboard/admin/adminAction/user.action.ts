"use server";

import { getCooke, logOut } from "@/app/(withCommonLayout)/actions/auth";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function updateUserStatus(
  userId: string,
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
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/update-status/${userId}`,
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
    revalidateTag("users");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(userId: string) {
  try {
    const accessToken = cookies().get("accessToken")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/delete/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
        cache: "no-store",
      }
    );
    revalidateTag("users");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function userAnalytic() {
  try {
    const accessToken = cookies().get("accessToken")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/analytics`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
        cache: "no-store",
      }
    );
    revalidateTag("users");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
