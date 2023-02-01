import React from "react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

interface ChildrenProps {
  children: JSX.Element;
}

export const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
