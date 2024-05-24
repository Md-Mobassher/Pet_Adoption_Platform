"use client";

import { AdminSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/adminSidebar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <section className="flex">
      <AdminSidebarWrapper />
      <div>{children}</div>
    </section>
  );
};
