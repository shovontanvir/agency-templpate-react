import React from "react";
import Skeleton from "../../../Components/Skeleton/Skeleton";

const KnowMore = (props) => {
  return (
    <section className="pb-10">
      <Skeleton>
        <div className="bg-[#f5f5f5] p-10 flex flex-col md:flex-row w-full justify-between items-center">
          <div>
            <h1 className="text-3xl">
              Know More About{" "}
              <span className="uppercase">{props.product.id}</span>
            </h1>
          </div>
          <div className="basis-1/3 flex">
            <div
              className={`basis-1/3 m-2 flex justify-center bg-[${props.product.blendColor}] p-5 aspect-square text-center`}
            >
              <div>
                <img
                  src="../images/global/icon-phone.png"
                  alt="phone"
                  className="mx-auto mb-5"
                />
                <h1 className="text-white">
                  <span>Call</span> <br /> <span>{props.product.mobile}</span>
                </h1>
              </div>
            </div>
            <div
              className={`basis-1/3 m-2 flex justify-center bg-[${props.product.blendColor}] p-5 aspect-square text-center`}
            >
              <div>
                <img
                  src="../images/global/icon-facebook.png"
                  alt="phone"
                  className="mx-auto mb-5"
                />
                <h1 className="text-white">Facebook</h1>
              </div>
            </div>
            <div
              className={`basis-1/3 m-2 flex justify-center bg-[${props.product.blendColor}] p-5 aspect-square text-center`}
            >
              <div>
                <img
                  src="../images/global/icon-globe.png"
                  alt="phone"
                  className="mx-auto mb-5"
                />
                <h1 className="text-white">Visit Website</h1>
              </div>
            </div>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default KnowMore;
