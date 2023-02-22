import React from "react";
import Skeleton from "../../../Components/Skeleton/Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "react-query";
import { getApiData } from "../../../Services/apiMethods";

const HomeHeader = () => {
  const titleOrganizer = (title) => {
    let firstHeading = "";
    var finalTitle = "";
    var highlightedHeading = "";
    var lastHeading = "";
    title.map((item, index) => {
      if (index < 2) {
        firstHeading = firstHeading + item + " ";
      } else if (index === 2) {
        highlightedHeading = item + " ";
      } else {
        lastHeading = lastHeading + item + " ";
      }
    });
    finalTitle = (
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-light mb-10">
        {firstHeading} <span className="text-brand">{highlightedHeading}</span>
        {lastHeading}
      </h1>
    );
    return finalTitle;
  };

  const getHomeHeaderData = () => {
    return getApiData("homeHeader");
  };
  const { isLoading, data, isError, error } = useQuery(
    "home-header",
    getHomeHeaderData
  );

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  return (
    <Swiper
      autoplay={{
        delay: 2500,
      }}
      loop={true}
      pagination
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {data.map((header) => (
        <SwiperSlide key={header.id}>
          <section
            className="bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/${header.image}`,
            }}
          >
            <Skeleton>
              <div className="h-screen flex justify-center items-center">
                <div className="text-center mb-16 lg:mb-52 flex flex-col justify-center items-center md:w-2/3">
                  {titleOrganizer(header.title.split(" "))}
                  <p className="md:text-xl font-light sm:px-6 md:px-8 xl:px-16">
                    {header.description}
                  </p>
                  <hr className="w-1/6 mx-auto mt-5 border border-brand" />
                </div>
              </div>
            </Skeleton>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeHeader;
