import React from "react";
import ClassicHeader from "../../Components/Header/ClassicHeader";
import DistributionDetails from "./partials/DistributionDetails";
import { useQuery } from "react-query";
import { getApiData } from "../../Services/apiFunctions";

const Distribution = () => {
  const getDistributionData = () => {
    return getApiData("distribution");
  };

  const { isLoading, data, isError, error } = useQuery(
    "distribution",
    getDistributionData
  );

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  return (
    <>
      <ClassicHeader
        bgImage={data[0].bgImage}
        blendMode="mix-blend-overlay"
        blendColor="#0F4D8B"
        title="Distribution"
      />
      <DistributionDetails data={data} />
    </>
  );
};

export default Distribution;
