import React from "react";
import { getApiData } from "../../services/apiMethods";
import { useQuery } from "react-query";
import Layout from "../layouts/Layout";

const Services = () => {
  const getHomeServicesData = () => {
    return getApiData("homeServices");
  };
  const { isLoading, data, isError, error } = useQuery(
    "home-services",
    getHomeServicesData
  );

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  return (
    <section className="py-16 px-0">
      <Layout className="justify-center">
        {data.map((item) => (
          <div
            className="sm:basis-1/2 lg:basis-1/3 text-center p-3 mb-5 lg:mb-0"
            key={item.id}
          >
            <img src={item.image} alt={item.alt} className="mx-auto mb-4" />
            <h1 className="text-3xl">{item.title}</h1>
            <p className="text-lg mt-3">{item.description}</p>
          </div>
        ))}
      </Layout>
    </section>
  );
};

export default Services;
