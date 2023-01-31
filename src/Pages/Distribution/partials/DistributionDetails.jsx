import React from "react";
import { useQuery } from "react-query";
import Layout from "../../../Components/Layouts/Layout";
import ServiceItem from "../../../Components/ServiceItem";
import { getApiData } from "../../../Services/apiMethods";

const DistributionDetails = () => {
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

  const content = data[0].content;

  return (
    <section>
      <Layout className="flex-col justify-center items-center py-20">
        <div className="text-center md:w-1/2 mb-20">
          <p className="text-lg">{data[0].introDescription}</p>
        </div>
        <div className="flex flex-wrap">
          {content.map((item) => (
            <ServiceItem
              key={item.title}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default DistributionDetails;
