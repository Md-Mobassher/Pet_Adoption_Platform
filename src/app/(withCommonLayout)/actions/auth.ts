"use server";

import { jwtDecode } from "jwt-decode";
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
    return data;
  } catch (error) {
    throw error;
  }
}

export async function signUpUser(data: Record<string, any>) {
  try {
    const formattedData = JSON.stringify(data);
    const res = await fetch(`${process.env.serverUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const result = await res.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function refreshTokenGen() {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = (await jwtDecode(accessToken)) as any;
    const now = Date.now() / 1000;
    const buffer = 60;
    const isExpired = decodedData.exp - now <= buffer;
    if (isExpired) {
      try {
        const res = await fetch(`${process.env.serverUrl}/auth/refresh-token`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Cookie: cookies().toString(),
          },
        });
        const { data } = await res.json();
        cookies().set("accessToken", data.accessToken);
      } catch (error) {
        throw error;
      }
    }
  }
}

export const userInfo = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = (await jwtDecode(accessToken)) as any;

    return {
      email: decodedData.email,
      role: decodedData.role,
      id: decodedData.id,
    };
  } else {
    return null;
  }
};

export const logOut = async () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
export const getCooke = async (cooke: string) => {
  return cookies().get(cooke)?.value;
};
