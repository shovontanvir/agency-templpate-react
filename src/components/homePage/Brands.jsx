import React from "react";
import { useQuery } from "react-query";
import { getApiData } from "../../services/apiMethods";
import Layout from "../layouts/Layout";
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
      <Layout className="w-full justify-between items-center">
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
          autoplay={{
            delay: 1500,
          }}
          loop={true}
          pagination
          modules={[Autoplay]}
          className="mySwiper"
        >
          {brands.map((brand) => (
            <SwiperSlide
              className="px-6 py-20 flex justify-center items-center"
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
