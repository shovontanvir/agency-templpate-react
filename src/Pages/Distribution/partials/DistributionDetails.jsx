import React from "react";
import Skeleton from "../../../Components/Skeleton/Skeleton";
import ServiceItem from "../../../Components/ServiceItem";

const DistributionDetails = (props) => {
  return (
    <section>
      <Skeleton className="flex-col justify-center items-center py-20">
        <div className="text-center md:w-1/2 mb-20">
          <p className="text-lg">{props.data[0].introDescription}</p>
        </div>
        <div className="flex flex-wrap">
          {props.data[0].content.map((item) => (
            <ServiceItem
              key={item.title}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Skeleton>
    </section>
  );
};

export default DistributionDetails;
