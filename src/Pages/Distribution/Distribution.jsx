import React from "react";
import ClassicHeader from "../../Components/Header/ClassicHeader";
import DistributionDetails from "./partials/DistributionDetails";

const Distribution = () => {
  return (
    <>
      <ClassicHeader bgClass="bg-classic-2" title="Distribution" />
      <DistributionDetails />
    </>
  );
};

export default Distribution;
