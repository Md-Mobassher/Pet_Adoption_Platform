"use client";

import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/dashboardNavbar/dashboardNavbar";
import { SidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/userSidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <SidebarWrapper></SidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
