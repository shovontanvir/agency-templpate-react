import React from "react";
import { useQuery } from "react-query";
import { getApiData } from "../../../Services/apiMethods";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Skeleton from "../../../Components/Skeleton/Skeleton";

const CareerContent = () => {
  const getCompanyContent = () => {
    return getApiData("companyMission");
  };
  const { isLoading, data, isError, error } = useQuery(
    "mission-vission-values",
    getCompanyContent
  );

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  const content = data;

  return (
    <section>
      <Skeleton>
        <Swiper
          autoplay={{
            delay: 3500,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper !h-[275px] md:!h-[175px]"
        >
          {content.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="text-center flex flex-col items-center">
                <h1 className="text-3xl mb-5 font-semibold">{item.title}</h1>
                {item.description.length > 0 && (
                  <p className="text-lg font-semibold">{`" ${item.description} "`}</p>
                )}
                {item.listItems.length > 0 && (
                  <div className="flex flex-col md:flex-row">
                    <ul className="flex flex-coll flex-wrap items-center">
                      {item.listItems.map((listItem, index) => (
                        <li key={listItem} className="basis-1/2">
                          <p className="text-lg font-semibold">{listItem}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Skeleton>
    </section>
  );
};

export default CareerContent;
