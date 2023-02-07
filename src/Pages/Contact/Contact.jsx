import React from "react";
import ClassicHeader from "../../Components/Header/ClassicHeader";
import ContactDetails from "./partials/ContactDetails";
import CareerContent from "./partials/CareerContent";
import ContactForm from "./partials/ContactForm";

const Contact = () => {
  return (
    <>
      <ClassicHeader bgClass="bg-classic-2" title="Career" />
      <ContactDetails />
      <div className="md:w-1/2 mx-auto">
        <CareerContent />
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
