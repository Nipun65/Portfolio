"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const paths = usePathname();
  return (
    <div
      className={`${paths === "/experience" ? "h-fit" : "h-screen"}  relative`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
