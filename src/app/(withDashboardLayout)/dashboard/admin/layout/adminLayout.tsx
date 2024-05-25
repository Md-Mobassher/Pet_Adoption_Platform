"use client";

import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/dashboardNavbar/dashboardNavbar";
import { AdminSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/adminSidebar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <section className="flex">
      <AdminSidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
