import React from "react";
import { getApiData } from "../../../Services/apiFunctions";
import { useQuery } from "react-query";
import Skeleton from "../../../Components/Skeleton/Skeleton";
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
      <Skeleton className="justify-center">
        {data.map((item) => (
          <ServiceItem
            key={item.id}
            id={item.id}
            image={item.image}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </Skeleton>
    </section>
  );
};

export default Services;
