"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Toaster />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
