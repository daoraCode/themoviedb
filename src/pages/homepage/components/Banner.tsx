import React from "react";
import banner_img from "../../../images/movie-banner.png";

import "./Banner.css";

export const Banner = () => {
  return (
    <img
      loading="lazy"
      className="banner"
      src={banner_img}
      alt="Official Movies Poster Banner"
    />
  );
};
