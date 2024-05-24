import type { Metadata } from "next";
import DashboardLayout from "./Layout/DashboardLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is main dashborad layout page.",
};

export default function DashboardMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
