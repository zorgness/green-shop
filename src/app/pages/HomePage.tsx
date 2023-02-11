import React from "react";
import { Banner } from "../components/Banner";
import { FooterImageSection } from "../components/FooterImageSection";
import { Navtab } from "../components/Navtab";
import { ProductContainer } from "../components/ProductContainer";
import { Layout } from "../layout/Layout";
import { data } from "../../data/dataProduct";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <Layout>
      <div>
        <Banner />
        <Navtab />
        <ProductContainer products={data} />
        <FooterImageSection />
      </div>
    </Layout>
  );
};
