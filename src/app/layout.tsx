import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "react-lazy-load-image-component/src/effects/blur.css";

import NextThemeProvider from "@/common/providers/NextThemeProvider";
import "@/common/styles/globals.css";
import "@/common/styles/reset.css";
import Sidebar from "@/components/porfolio/Sidebar";
import ToggleTheme from "@/components/porfolio/ToggleTheme";

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
      <head>
        <link rel="icon" href="/favicon.png" sizes="cover" />
      </head>
      <body className={`${poppins.className} h-screen w-screen`}>
        <NextThemeProvider>
          <Sidebar />
          <ToggleTheme />
          <main className="h-screen w-screen overflow-x-hidden">
            {children}
          </main>
        </NextThemeProvider>
      </body>
    </html>
  );
}
