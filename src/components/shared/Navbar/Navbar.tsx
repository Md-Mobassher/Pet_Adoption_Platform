"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Cat } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/Providers/AuthProvider";
import { logOut } from "@/app/(withCommonLayout)/actions/auth";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import assets from "@/assets";

export default function NavigationBar({ user }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const { setUser } = useAuth();
  const routeMap: Record<string, string> = {
    USER: "/dashboard",
    ADMIN: "/dashboard/admin",
  };
  const logOutUser = async () => {
    await logOut();
    setUser(null);
    router.push("/");
  };

  return (
    <div className="bg-content1">
      <Navbar
        maxWidth="2xl"
        className="container mx-auto bg-content1"
        shouldHideOnScroll
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand>
          <Link className="flex justify-start items-center" href="/">
            <Image src={assets.logo} alt="logo" className="" width={200} />
          </Link>
        </NavbarBrand>

        <NavbarContent
          className="hidden lg:flex md:flex  gap-4"
          justify="center"
        >
          <NavbarItem>
            <Link
              color="foreground"
              href="/"
              className="hover:text-primary font-semibold p-2"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="/about"
              className="hover:text-primary font-semibold p-2"
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/pets"
              color="foreground"
              className="hover:text-primary font-semibold p-2"
            >
              Pets
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/contact"
              color="foreground"
              className="hover:text-primary font-semibold p-2"
            >
              Contact
            </Link>
          </NavbarItem>
          {user && (
            <NavbarItem>
              <Link
                href={routeMap[user?.role]}
                className="hover:text-primary font-semibold p-2"
              >
                Dashboard
              </Link>
            </NavbarItem>
          )}
          {user && user.role === "ADMIN" && (
            <NavbarItem>
              <Link
                href="/dashboard/admin/my-profile"
                className="hover:text-primary font-semibold p-2"
              >
                My Profile
              </Link>
            </NavbarItem>
          )}

          {user && user.role === "USER" && (
            <NavbarItem>
              <Link
                href="/dashboard/my-profile"
                className="hover:text-primary font-semibold p-2"
              >
                My Profile
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>

        <NavbarContent className="hidden lg:flex  gap-4" justify="end">
          <ThemeSwitcher />
          {user ? (
            <NavbarItem>
              <Button onClick={logOutUser} color="primary" variant="flat">
                Logout
              </Button>
            </NavbarItem>
          ) : (
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">
                <Button onClick={logOutUser} color="primary" variant="flat">
                  Login
                </Button>
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        {/* mobile */}
        <NavbarMenu>
          <NavbarMenuItem>
            <Link href={`/`}>Home</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="/about">
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/pets" color="foreground">
              Pets
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            {user && <Link href={routeMap[user?.role]}>Dashboard</Link>}
          </NavbarMenuItem>
          <NavbarMenuItem>
            {user && user.role === "ADMIN" && (
              <Link href="/dashboard/admin/my-profile">My Profile</Link>
            )}
          </NavbarMenuItem>
          <NavbarMenuItem>
            {user && user.role === "USER" && (
              <Link href="/dashboard/my-profile">My Profile</Link>
            )}
          </NavbarMenuItem>
          <NavbarMenuItem>
            <ThemeSwitcher />
          </NavbarMenuItem>
          <NavbarMenuItem>
            {user ? (
              <Button onClick={logOutUser} color="primary" variant="flat">
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button onClick={logOutUser} color="primary" variant="flat">
                  Login
                </Button>
              </Link>
            )}
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
