import React from "react";
import ClassicHeader from "../../Components/Header/ClassicHeader";
import ContactDetails from "./partials/ContactDetails";
import CareerContent from "./partials/CareerContent";
import ContactForm from "./partials/ContactForm";
import { useQuery } from "react-query";
import { getApiData } from "../../Services/apiFunctions";

const Contact = () => {
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
    <>
      <ClassicHeader bgImage={careerDetails.bgImage} title="Career" />
      <ContactDetails careerDetails={careerDetails} />
      <div className="md:w-1/2 mx-auto">
        <CareerContent />
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
