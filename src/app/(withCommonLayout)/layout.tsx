import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { userInfo } from "./actions/auth";

export const metadata: Metadata = {
  title: "Pet Adoption Platform",
  description: "This is a pet adoption platform website.",
};

export default async function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userInfo();
  return (
    <>
      <Navbar user={user} />
      <div className="mx-auto container">{children}</div>
      <Footer />
    </>
  );
}
