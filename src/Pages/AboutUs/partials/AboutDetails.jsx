import React from "react";
import { useQuery } from "react-query";
import Layout from "../../../Components/Layouts/Layout";
import { getApiData } from "../../../Services/apiMethods";

const AboutDetails = () => {
  const getAboutDetails = () => {
    return getApiData("aboutUs");
  };
  const { isLoading, data, isError, error } = useQuery(
    "about-us",
    getAboutDetails
  );

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  const aboutUs = data[0];
  const content = aboutUs.content;

  return (
    <section>
      <Layout className="py-10 md:py-20 justify-center items-center">
        <div className="md:basis-1/3 text-center md:text-left border border-[D9D9D9] p-5 md:p-10">
          <img src={aboutUs.image} alt="about us" />
        </div>
        <div className="md:basis-2/3 text-center mt-16 md:mt-0 md:text-left md:pl-20">
          <p className="text-lg">{aboutUs.introDescription}</p>
          <div className="mt-3 md:mt-5">
            {content.map((item, index) => (
              <div
                className={`flex flex-col md:flex-row justify-center items-center py-10 ${
                  index < content.length - 1 && "border-b"
                }`}
                key={item.id}
              >
                <div className="p-2 mb-3 md:mb-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="aspect-square"
                  />
                </div>
                <div className="md:pl-10">
                  <h1 className="text-3xl mb-3">{item.title}</h1>
                  {item.description.length > 0 && (
                    <p className="text-lg">{item.description}</p>
                  )}
                  {item.listItems.length > 0 && (
                    <div className="flex flex-col md:flex-row">
                      <ul className="md:mr-20">
                        {item.listItems.map(
                          (listItem, index) =>
                            index < Math.ceil(item.listItems.length / 2) && (
                              <li key={listItem} className="mb-1">
                                <p className="text-lg">- {listItem}</p>
                              </li>
                            )
                        )}
                      </ul>

                      <ul className="md:mr-20">
                        {item.listItems.map(
                          (listItem, index) =>
                            index >= Math.ceil(item.listItems.length / 2) && (
                              <li key={listItem} className="mb-1">
                                <p className="text-lg">- {listItem}</p>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default AboutDetails;