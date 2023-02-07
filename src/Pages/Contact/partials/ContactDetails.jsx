import React from "react";
import { useQuery } from "react-query";
import Layout from "../../../Components/Layouts/Layout";
import Media from "../../../Components/Media";
import { getApiData } from "../../../Services/apiMethods";

import "swiper/css";

const ContactDetails = () => {
  const getCareerData = () => {
    return getApiData("career");
  };

  const {
    isLoading: careerLoading,
    data: careerData,
    isError: isCareerError,
    error: carrerError,
  } = useQuery("career", getCareerData);

  if (careerLoading) {
    return "Loading...";
  }

  if (isCareerError) {
    return carrerError.message;
  }

  const careerDetails = careerData[0];

  return (
    <section className="py-20">
      <Layout className="flex-col items-center">
        <div className="text-center md:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-5xl mb-5">
            {careerDetails.tagLine}
          </h1>
          <p className="md:text-lg mt-3 text-[#505050]">
            {careerDetails.tagDescription}
          </p>
        </div>
        <Media image={careerDetails.image}>
          <div className="text-center md:pr-24">
            <p className="md:text-lg mt-3 text-[#505050]">
              {careerDetails.careerText}
            </p>
          </div>
        </Media>
      </Layout>
    </section>
  );
};

export default ContactDetails;
