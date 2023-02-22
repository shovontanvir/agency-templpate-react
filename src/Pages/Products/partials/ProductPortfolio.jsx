import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Skeleton from "../../../Components/Skeleton/Skeleton";

const ProductPortfolio = (props) => {
  return (
    <section className="pt-10">
      <Skeleton>
        <h1 className="text-lg md:text-3xl mb-6 md:px-16">Portfolio</h1>
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          pagination
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {props.productsPortfolio.map((portfolio, index) => (
            <SwiperSlide key={`portfolio-${index}`} className="flex">
              <div className="p-20 md:m-16 bg-[#F5F5F5] flex justify-center items-center relative group">
                <img src={portfolio.src} alt={portfolio.title} />
                <div className="absolute bottom-0 left-0 p-10 invisible group-hover:visible">
                  <h1 className="text-xl">{portfolio.title}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Skeleton>
    </section>
  );
};

export default ProductPortfolio;
