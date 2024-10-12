import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  USER: [/^\/dashboard\/*/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin/],
  ALL_USERS: [/^\/pets\/\d+/], // Protect all /pets/:petId routes
  PETS: [/^\/pets\/\w+/], // Protect the specific /pets/:petId route
};

export async function middleware(request: NextRequest) {
  // console.log("Incoming request:", request.nextUrl);

  const { pathname } = request.nextUrl;

  // console.log("Pathname:", pathname);

  const accessToken = cookies().get("accessToken")?.value;

  // console.log("Access Token:", accessToken);

  if (!accessToken) {
    // console.log("No access token found. Redirecting to login.");
    if (!AuthRoutes.includes(pathname)) {
      const redirectUrl = new URL("/login", request.url);
      redirectUrl.searchParams.set("redirectTo", pathname);
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
    // } else {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }
  }

  let decodedData = null;
  decodedData = jwtDecode(accessToken) as any;

  // console.log("Decoded data:", decodedData);

  const role = decodedData?.role;

  // console.log("Role:", role);

  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      // console.log("Route is protected. Proceeding.");
      return NextResponse.next();
    }
  }

  // console.log("Access denied. Redirecting to homepage.");
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
