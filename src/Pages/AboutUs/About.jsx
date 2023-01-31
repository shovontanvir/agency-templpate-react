import React from "react";
import ClassicHeader from "../../Components/Header/ClassicHeader";
import AboutDetails from "./partials/AboutDetails";

const About = () => {
  return (
    <>
      <ClassicHeader bgClass="bg-classic-1" title="About Us" />
      <AboutDetails />
    </>
  );
};

export default About;
