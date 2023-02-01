import React from "react";

interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)), url(https://www.jardiner-malin.fr/wp-content/uploads/2022/09/terrarium.jpg)",
      }}
    >
      <div className="text-center">
        <h1>
          <strong>Nature Création</strong>
        </h1>
        <p>Un Cadeau Artisanal</p>
        <div className="mt-3">
          <a className="btn btn-flat" href="#">
            Découvrir
          </a>
        </div>
      </div>
    </div>
  );
};
