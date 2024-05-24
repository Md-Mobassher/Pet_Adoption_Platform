"use client";

import { SidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/userSidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <SidebarWrapper></SidebarWrapper>
      <div>{children}</div>
    </section>
  );
};
