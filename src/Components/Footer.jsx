import React from "react";
import Skeleton from "./Skeleton/Skeleton";
import logo from "../images/logo-btractech.png";
import { menuItems } from "../Router/paths";
import marker from "../images/map-marker.png";

const Footer = () => {
  const menu1 = [];
  const menu2 = [];
  const length = menuItems.length;
  console.log(length);

  menuItems.forEach((item, index) => {
    index + 1 <= menuItems.length / 2
      ? menu1.push(item.name)
      : menu2.push(item.name);
  });

  console.log("menu1:", menu1, "menu2:", menu2);
  return (
    <section className="py-10">
      <Skeleton>
        <div className="w-full flex items-center flex-col md:flex-row flex-wrap border-t py-10">
          <div className="md:basis-1/4 w-full my-5">
            <img src={logo} alt="btrac tech logo" />
            <p className="mt-3 text-[13px]">
              <span className="mr-3">&#169;</span>
              Copyright 2020 B-Trac Technologies Ltd.
              <br />
              All Rights Reserved | Designed by B-Trac Solutions Ltd.
            </p>
          </div>
          <div className="md:basis-1/4 w-full my-5">
            <ul>
              {menu1.map((item) => (
                <li className="text-black mb-3">- {item}</li>
              ))}
            </ul>
          </div>
          <div className="md:basis-1/4 w-full my-5">
            <ul>
              {menu2.map((item) => (
                <li className="text-black mb-3">- {item}</li>
              ))}
            </ul>
          </div>
          <div className="md:basis-1/4 w-full my-5">
            <p>
              Address: <br />
              House 102, Road 13/C, Block E, Banani, <br />
              Dhaka-1213, Bangladesh
              <span className="inline-block ml-3 -mb-1">
                <img src={marker} alt="btrac technologies" />
              </span>
            </p>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default Footer;
