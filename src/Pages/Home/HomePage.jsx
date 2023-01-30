import React from "react";
import Brands from "./partials/Brands";
import HomeHeader from "./partials/HomeHeader";
import PartnerWithUs from "./partials/PartnerWithUs";
import Services from "./partials/Services";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Services />
      <Brands />
      <PartnerWithUs />
    </>
  );
};

export default HomePage;
