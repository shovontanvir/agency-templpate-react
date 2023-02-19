import React from "react";
import Layout from "../../../Components/Layouts/Layout";
import { Player } from "video-react";

import "../../../../node_modules/video-react/dist/video-react.css";

const ProductDetails = (props) => {
  return (
    <section className="md:py-24">
      <Layout className="flex-col md:flex-row">
        <div className="md:basis-1/2 py-10 md:pr-20">
          <h1 className="text-3xl">{props.productTitle}</h1>
          <hr className="my-10 border border-[#0F4D8B] w-1/3 opacity-30" />
          <p className="text-lg">{props.productDescription}</p>
        </div>
        <div className="md:basis-1/2 my-10 md:my-0">
          <Player
            playsInline
            poster={props.productPoster}
            src={props.videoUrl}
          />
        </div>
      </Layout>
    </section>
  );
};

export default ProductDetails;
