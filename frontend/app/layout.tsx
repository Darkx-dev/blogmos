import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import Theme from "@/providers/Theme";
import { Poppins } from "next/font/google";
import React from "react";
import "@/styles/content.css"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body className={`dark:bg-base-300 ${poppins.className} pattern transition-all min-h-screen`}>
        <Theme>
          <AuthProvider>{children}</AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
