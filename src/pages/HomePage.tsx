import React from "react";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { FooterImageSection } from "../components/FooterImageSection";
import { Navtab } from "../components/Navtab";
import { ProductContainer } from "../components/ProductContainer";
import { Layout } from "../layout/Layout";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <Layout>
      <div>
        <Banner />
        <Navtab />
        <ProductContainer />
        <FooterImageSection />
      </div>
    </Layout>
  );
};
