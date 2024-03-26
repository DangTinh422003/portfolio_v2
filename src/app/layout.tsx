import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";

import "@/common/styles/reset.css";
import "@/common/styles/globals.css";
import ToggleTheme from "@/components/ToggleTheme";
import NextThemeProvider from "@/common/providers/NextThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cao Dang Tinh's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} w-screen h-scree`}>
        <NextThemeProvider>
          <Sidebar />
          <ToggleTheme />
          <main className="h-screen w-screen">{children}</main>
        </NextThemeProvider>
      </body>
    </html>
  );
}
