import React from "react";
import { getApiData } from "../../../Services/apiMethods";
import { useQuery } from "react-query";
import Layout from "../../../Components/Layouts/Layout";
import ServiceItem from "../../../Components/ServiceItem";

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
    <section className="py-16 md:py-20 lg:py-24 xl:py-28 px-0">
      <Layout className="justify-center">
        {data.map((item) => (
          <ServiceItem
            id={item.id}
            image={item.image}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </Layout>
    </section>
  );
};

export default Services;
