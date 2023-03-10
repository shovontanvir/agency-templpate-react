import React from "react";
import Skeleton from "./Skeleton/Skeleton";

const PartnerWithUs = (props) => {
  return (
    <section className="py-10">
      <Skeleton>
        <div className="bg-partner bg-[#f2f2f2] w-full flex flex-wrap justify-between items-center p-5 md:p-10">
          <div className="basis-full lg:basis-1/2 mb-5 lg:mb-0">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="basis-full lg:basis-1/2">{props.children}</div>
        </div>
      </Skeleton>
    </section>
  );
};

export default PartnerWithUs;
