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

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const accessToken = cookies().get("accessToken")?.value;

//   if (!accessToken) {
//     if (AuthRoutes.includes(pathname)) {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   let decodedData = null;
//   decodedData = jwtDecode(accessToken) as any;

//   const role = decodedData?.role;

//   if (role && roleBasedPrivateRoutes[role as Role]) {
//     const routes = roleBasedPrivateRoutes[role as Role];
//     if (routes.some((route) => pathname.match(route))) {
//       return NextResponse.next();
//     }
//   }
//   return NextResponse.redirect(new URL("/", request.url));
// }
export async function middleware(request: NextRequest) {
  console.log("Incoming request:", request.nextUrl);

  const { pathname } = request.nextUrl;

  console.log("Pathname:", pathname);

  const accessToken = cookies().get("accessToken")?.value;

  console.log("Access Token:", accessToken);

  if (!accessToken) {
    console.log("No access token found. Redirecting to login.");
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  let decodedData = null;
  decodedData = jwtDecode(accessToken) as any;

  console.log("Decoded data:", decodedData);

  const role = decodedData?.role;

  console.log("Role:", role);

  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      console.log("Route is protected. Proceeding.");
      return NextResponse.next();
    }
  }

  console.log("Access denied. Redirecting to homepage.");
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
