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

  const menuItems = [
    "Home",
    "About",
    "Pets",
    "Dashboard",
    "My Profile",
    "Log Out",
  ];

  return (
    <Navbar maxWidth="2xl" className="container mx-auto ">
      <NavbarBrand>
        <Link className="flex justify-start items-center" href="/">
          <Cat className="size-10 mr-2 text-primary" />
          <h1 className="font-bold lg:text-3xl text-2xl text-inherit">
            <span className="text-primary">Pet</span> Adoption Platform
          </h1>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/pets" color="foreground">
            Pets
          </Link>
        </NavbarItem>
        <NavbarItem>
          {user && <Link href={routeMap[user?.role]}>Dashboard</Link>}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

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
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
