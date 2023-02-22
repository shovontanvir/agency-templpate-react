import React from "react";
import ClassicHeader from "../../Components/Header/ClassicHeader";
import AboutDetails from "./partials/AboutDetails";
import { useQuery } from "react-query";
import { getApiData } from "../../Services/apiFunctions";

const About = () => {
  const getAboutDetails = () => {
    return getApiData("aboutUs");
  };
  const {
    isLoading: aboutIsLoading,
    data: aboutData,
    isError: isAboutError,
    error: aboutError,
  } = useQuery("about-us", getAboutDetails);

  const getCompanyContent = () => {
    return getApiData("companyMission");
  };
  const { isLoading, data, isError, error } = useQuery(
    "mission-vission-values",
    getCompanyContent
  );

  if (aboutIsLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isAboutError) {
    return aboutError.message;
  }

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  const aboutUs = aboutData[0];
  const content = data;

  return (
    <>
      <ClassicHeader bgImage={aboutUs.bgImage} title="About Us" />
      <AboutDetails data={aboutUs} content={content} />
    </>
  );
};

export default About;
