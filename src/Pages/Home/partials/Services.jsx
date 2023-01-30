import React from "react";
import { getApiData } from "../../../Services/apiMethods";
import { useQuery } from "react-query";
import Layout from "../../../Components/Layouts/Layout";

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
          <div
            className="sm:basis-1/2 lg:basis-1/3 text-center sm:p-3 my-8 sm:my-10 md:my-12 lg:my-0"
            key={item.id}
          >
            <img src={item.image} alt={item.alt} className="mx-auto mb-4" />
            <h1 className="text-2xl md:text-3xl">{item.title}</h1>
            <p className="md:text-lg mt-3 text-[#505050]">{item.description}</p>
          </div>
        ))}
      </Layout>
    </section>
  );
};

export default Services;
