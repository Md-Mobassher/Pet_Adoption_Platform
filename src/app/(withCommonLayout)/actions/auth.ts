"use server";

import { cookies } from "next/headers";

export async function loginUser(pre: FormData, formData: FormData) {
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    const res = await fetch(`${process.env.serverUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
      credentials: "include",
    });
    const data = await res.json();

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
      return data;
    }
  } catch (error) {
    throw error;
  }
}

export async function signUpUser(pre: FormData, formData: FormData) {
  try {
    console.log(pre);
    console.log(formData);
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    console.log(formattedData);
    const res = await fetch(`${process.env.serverUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
