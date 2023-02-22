import React from "react";
import { useState } from "react";
import logo from "../images/logo-btractech.png";
import iconContact from "../images/icon-contact.png";
import login from "../images/icon-login.png";
import Skeleton from "./Skeleton/Skeleton";
import Menu from "./Menu";

const Navbar = () => {
  const [menuIsOn, setMenuIsOn] = useState(false);

  const disableScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  const enableScroll = () => {
    window.onscroll = function () {};
  };

  const openMenu = () => {
    setMenuIsOn(true);
    disableScroll();
  };

  const closeMenu = () => {
    setMenuIsOn(false);
    enableScroll();
  };

  return (
    <>
      <nav className="py-5 fixed z-50 w-screen">
        <Skeleton className="justify-between items-center w-full">
          <div>
            <img src={logo} alt="btrac technologies" />
          </div>
          <div className="flex items-center">
            <h1 className="flex mr-8">
              <img src={iconContact} alt="contact us" />{" "}
              <span className="ml-3">Contact Us</span>
            </h1>
            <h1 className="flex mr-8">
              <img src={login} alt="partner login" />{" "}
              <span className="ml-3">Partner Login</span>
            </h1>
            <div
              className="flex flex-col justify-between w-10 h-4 cursor-pointer group"
              onClick={() => openMenu()}
            >
              <span className="h-[0.25rem] bg-black group-hover:animate-bounce"></span>
              <span className="h-[0.25rem] bg-black group-hover:animate-bounce"></span>
            </div>
          </div>
        </Skeleton>
      </nav>

      {menuIsOn && <Menu onClick={() => closeMenu()} isOn={menuIsOn} />}
    </>
  );
};

export default Navbar;
