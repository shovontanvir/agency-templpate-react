import React from "react";
import { useQuery } from "react-query";
import { getApiData } from "../../services/apiMethods";
import Layout from "../layouts/Layout";

const PartnerWithUs = () => {
  // function and query to query social media
  const getSocials = () => {
    return getApiData("socialLinks");
  };

  const {
    isLoading: socialLoading,
    data: socials,
    isError: socialError,
    error: socialErrorData,
  } = useQuery("social-media", getSocials);

  // function and query to query partner section
  const getPartners = () => {
    return getApiData("homePartners");
  };

  const { isLoading, data, isError, error } = useQuery(
    "partner-with-us",
    getPartners
  );

  if (socialLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (socialError) {
    return socialErrorData.message;
  }

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  console.log(data);

  return (
    <section className="py-10">
      <Layout>
        <div className="bg-partner bg-[#f2f2f2] w-full flex flex-wrap justify-between items-center p-10">
          <div className="basis-full lg:basis-1/2 mb-5 lg:mb-0">
            <img src={data[0].image} alt={data[0].title} />
          </div>
          <div className="basis-full lg:basis-1/2">
            <div className="bg-white p-4 md:p-8 lg:p-12 xl:p-16">
              <h1 className="text-3xl mb-5">{data[0].title}</h1>
              <p className="md:text-sm xl:text-lg text-[#505050]">
                {data[0].description}
              </p>
              <div className="w-full flex lg:justify-end mt-10">
                <button className="border border-brand text-brand rounded-full py-2 px-5">
                  {data[0].buttonText}
                </button>
              </div>
            </div>
            <div className="bg-white p-4 md:p-8 lg:p-12 xl:p-16 mt-5">
              <h1 className="md:text-xl lg:text-2xl xl:text-3xl mb-10">
                Follow us:
              </h1>
              <div className="flex">
                {socials.map((social) => (
                  <a href={social.url} target="blank" className="mr-10">
                    <img src={social.logo} alt={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default PartnerWithUs;
