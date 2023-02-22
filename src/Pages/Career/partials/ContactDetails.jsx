import React from "react";
import Skeleton from "../../../Components/Skeleton/Skeleton";
import Media from "../../../Components/Media";

import "swiper/css";

const ContactDetails = (props) => {
  return (
    <section className="py-20">
      <Skeleton className="flex-col items-center">
        <div className="text-center md:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-5xl mb-5">
            {props.careerDetails.tagLine}
          </h1>
          <p className="md:text-lg mt-3 text-[#505050]">
            {props.careerDetails.tagDescription}
          </p>
        </div>
        <Media image={props.careerDetails.image}>
          <div className="text-center md:pr-24">
            <p className="md:text-lg mt-3 text-[#505050]">
              {props.careerDetails.careerText}
            </p>
          </div>
        </Media>
      </Skeleton>
    </section>
  );
};

export default ContactDetails;
