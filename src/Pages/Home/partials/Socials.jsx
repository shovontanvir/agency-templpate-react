import React from "react";
import { useQuery } from "react-query";
import { getApiData } from "../../../Services/apiMethods";

const Socials = () => {
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

  if (socialLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (socialError) {
    return socialErrorData.message;
  }

  return (
    <div className="bg-white p-4 md:p-8 lg:p-12 xl:p-16 mt-5">
      <h1 className="text-2xl md:text-3xl mb-5">Follow us:</h1>
      <div className="flex mt-5">
        {socials.map((social) => (
          <a
            href={social.url}
            target="blank"
            className="mr-3 md:mr-10"
            key={social.name}
          >
            <img src={social.logo} alt={social.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
