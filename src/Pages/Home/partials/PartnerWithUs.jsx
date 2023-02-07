import React from "react";
import { useQuery } from "react-query";
import { getApiData } from "../../../Services/apiMethods";
import Layout from "../../../Components/Layouts/Layout";
import Socials from "./Socials";

const PartnerWithUs = () => {
  // function and query to query partner section
  const getPartners = () => {
    return getApiData("homePartners");
  };

  const { isLoading, data, isError, error } = useQuery(
    "partner-with-us",
    getPartners
  );

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  return (
    <section className="py-10">
      <Layout>
        <div className="bg-partner bg-[#f2f2f2] w-full flex flex-wrap justify-between items-center p-5 md:p-10">
          <div className="basis-full lg:basis-1/2 mb-5 lg:mb-0">
            <img src={data[0].image} alt={data[0].title} />
          </div>
          <div className="basis-full lg:basis-1/2">
            <div className="bg-white p-4 md:p-8 lg:p-12 xl:p-16">
              <h1 className="text-2xl md:text-3xl mb-5">{data[0].title}</h1>
              <p className="md:text-lg mt-3 text-[#505050]">
                {data[0].description}
              </p>
              <div className="w-full flex lg:justify-end mt-10">
                <button className="border border-brand text-brand rounded-full py-2 px-5">
                  {data[0].buttonText}
                </button>
              </div>
            </div>
            <Socials />
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default PartnerWithUs;
