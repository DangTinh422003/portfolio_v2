import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/common/styles/reset.css";
import "@/common/styles/globals.css";

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
    <html lang="en">
      <body
        className={`${poppins.className} w-screen h-screen dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
