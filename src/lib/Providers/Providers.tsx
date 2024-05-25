"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { AuthProvider } from "./AuthProvider";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { refreshTokenGen } from "@/app/(withCommonLayout)/actions/auth";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const location = usePathname();

  useEffect(() => {
    refreshTokenGen();
  }, [location]);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Toaster />
        <AuthProvider> {children}</AuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
