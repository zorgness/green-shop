import React from "react";
import img1 from "./../assets/img1.jpeg";
import img3 from "./../assets/img3.jpeg";

interface FooterImageSectionProps {}

export const FooterImageSection: React.FC<FooterImageSectionProps> = ({}) => {
  return (
    <div className="flex items-center justify-around m-5  flex-wrap gap-3 ">
      <div>
        <img className="rounded-t-lg" src={img3} alt="" width={"360px"} />
      </div>
      <div>
        <img
          className="rounded-t-lg"
          src="http://cdn.shopify.com/s/files/1/0565/1670/6419/products/bobylaplante-produits-terrariums-terrarium_leon_l-ficus_ginseng.jpg?v=1663265764"
          alt=""
          width={"360px"}
        />
      </div>
      <div>
        <img className="rounded-t-lg" src={img1} alt="" width={"360px"} />
      </div>
    </div>
  );
};
