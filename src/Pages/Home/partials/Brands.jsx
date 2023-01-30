import React from "react";
import { useQuery } from "react-query";
import { getApiData } from "../../../Services/apiMethods";
import Layout from "../../../Components/Layouts/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const Brands = () => {
  const getBrands = () => {
    return getApiData("brands");
  };

  const {
    isLoading,
    data: brands,
    isError,
    error,
  } = useQuery("home-brands", getBrands);

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  return (
    <section>
      <Layout className="w-full justify-between items-center py-12 sm:py-16 lg:py-20">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          autoplay={
            {
              // delay: 1500,
            }
          }
          loop={true}
          pagination
          modules={[Autoplay]}
          className="mySwiper"
        >
          {brands.map((brand) => (
            <SwiperSlide
              className="px-6 h-full flex justify-center items-center"
              key={brand.id}
            >
              <img src={brand.image} alt={brand.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Layout>
    </section>
  );
};

export default Brands;
