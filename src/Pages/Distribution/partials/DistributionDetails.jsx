import React from "react";
import Layout from "../../../Components/Layouts/Layout";
import ServiceItem from "../../../Components/ServiceItem";

const DistributionDetails = (props) => {
  return (
    <section>
      <Layout className="flex-col justify-center items-center py-20">
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
      </Layout>
    </section>
  );
};

export default DistributionDetails;
