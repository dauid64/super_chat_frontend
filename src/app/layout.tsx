"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ForceAuthenticate from "@/components/auth/ForceAuthenticate";
import { AuthProvider } from "@/data/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>
          <ForceAuthenticate>
            {children}
          </ForceAuthenticate>
        </AuthProvider>
      </body>
    </html>
  );
}
