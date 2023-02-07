import React from "react";
import Layout from "../../../Components/Layouts/Layout";

const ContactForm = () => {
  return (
    <section className="py-20">
      <Layout className="justify-center">
        <div className="md:w-1/2 lg:w-1/3 aspect-square bg-[#fafafa] p-8 md:p-10 lg:p-16 border border-[#e5e5e5] rounded-lg">
          <h1 className="text-2xl md:text-3xl lg:text-5xl mb-5">
            Join with Us
          </h1>
          <p className="md:text-lg mt-3 text-[#505050]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            temporibus dolores adipisci molestiae, sit nobis recusandae dolore
            quam aliquam magnam.
          </p>
          <div className="py-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name*"
              className="w-full bg-transparent my-3 border-b placeholder-black py-3"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email*"
              className="w-full bg-transparent my-3 border-b placeholder-black py-3"
            />
            <input
              type="text"
              name="remark"
              id="remark"
              placeholder="Remark*"
              className="w-full bg-transparent my-3 border-b placeholder-black py-3"
            />
            <div className="w-full flex flex-col md:flex-row md:justify-end items-start md:items-center mt-10">
              <div className="md:mr-5">
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  className="hidden"
                />
                <label htmlFor="resume" className=" cursor-pointer flex">
                  <img
                    src="images/career/attachment.png"
                    alt="attach resume"
                    className="mr-3"
                  />
                  Attach Resume
                </label>
              </div>
              <button
                type="submit"
                className="border border-black px-7 py-2 rounded-md flex items-center my-3 md:my-0"
              >
                SEND
                <img
                  src="images/career/arrow.png"
                  alt="submit"
                  className="ml-3"
                />
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default ContactForm;
