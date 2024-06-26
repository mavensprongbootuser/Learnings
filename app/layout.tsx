import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./infrastucter/navigation/navBar";
import Footer from "./infrastucter/navigation/footer";
import AuthNavigator from "./authNavigator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid grid-rows-[auto_1fr_auto] h-screen`}
      >
        <AuthNavigator>{children}</AuthNavigator>
      </body>
    </html>
  );
}
//
