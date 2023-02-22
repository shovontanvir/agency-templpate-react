import React from "react";
import Skeleton from "../Skeleton/Skeleton";
import MovingComponent from "react-moving-text";

const ClassicHeader = (props) => {
  return (
    <section className="h-[40vh] bg-cover bg-no-repeat relative">
      <div
        className={`absolute inset-0 w-full h-full bg-[${props.blendColor}] ${props.blendMode}`}
      ></div>
      <img
        src={props.bgImage}
        alt={props.title}
        className="absolute inset-0 w-full h-full -z-50"
      />
      <Skeleton className="h-full justify-center items-center flex-col">
        {!props.productLogo ? (
          <div className="z-50">
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
          </div>
        ) : (
          <div className="z-50">
            <img src={props.productLogo} alt={props.title} />
          </div>
        )}
      </Skeleton>
    </section>
  );
};

export default ClassicHeader;
