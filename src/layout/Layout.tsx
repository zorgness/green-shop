import React from "react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
