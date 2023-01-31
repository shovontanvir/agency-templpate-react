import React from "react";

const ServiceItem = (props) => {
  return (
    <div
      className="sm:basis-1/2 lg:basis-1/3 text-center sm:p-3 my-8 sm:my-10 md:my-12 lg:my-0"
      key={props.id}
    >
      <img src={props.image} alt={props.alt} className="mx-auto mb-4" />
      <h1 className="text-2xl md:text-3xl">{props.title}</h1>
      <p className="md:text-lg mt-3 text-[#505050]">{props.description}</p>
    </div>
  );
};

export default ServiceItem;
