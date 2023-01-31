import React from "react";
import Layout from "../Layouts/Layout";
import MovingComponent from "react-moving-text";

const ClassicHeader = (props) => {
  return (
    <section className={`${props.bgClass} h-[40vh] bg-cover bg-no-repeat`}>
      <Layout className="h-full justify-center items-center flex-col">
        <h1 className="text-3xl md:text-4xl xl:text-5xl flex">
          <MovingComponent
            type="slideInFromLeft"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="none"
          >
            {props.title}
          </MovingComponent>
        </h1>
        <p className="my-2 md:my-4 text-xl">
          Home / <span className="text-brand">{props.title}</span>
        </p>
      </Layout>
    </section>
  );
};

export default ClassicHeader;
