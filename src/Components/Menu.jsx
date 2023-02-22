import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoDesign from "../images/logo-design.png";
import { menuItems } from "../Router/paths";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const [subMenuIsOn, setSubMenuIsOn] = useState(false);
  const [menuId, setMenuId] = useState();

  const openSubMenu = () => {
    setSubMenuIsOn(true);
  };

  const closeSubMenu = () => {
    setSubMenuIsOn(false);
  };

  const subMenuHandler = (id) => {
    setMenuId(id);
    if (subMenuIsOn && id !== menuId) {
      closeSubMenu();
      openSubMenu();
    } else if (!subMenuIsOn && id === menuId) {
      openSubMenu();
    } else if (!subMenuIsOn && id !== menuId) {
      openSubMenu();
    } else {
      closeSubMenu();
    }
  };

  // const menuHandler = (onclick, menuItem) => {
  //   onclick();
  //   menuItem.childMenu && subMenuHandler(menuItem.id);
  // };

  return (
    <>
      <div className="h-screen w-screen fixed inset-0 bg-[#C4C4C4] opacity-70 z-[80]"></div>
      <div
        className={`h-screen w-screen md:w-[50vw] lg:w-[25vw] bg-brand fixed top-0 bottom-0 right-0 z-[100] transition duration-1000 ease-in-out ${
          props.isOn ? "block" : "hidden"
        }`}
      >
        <div className="h-full relative">
          <FontAwesomeIcon
            icon={faTimes}
            className="absolute top-[5%] right-[5%] md:-left-16 text-black text-3xl pl-3 hover:text-brand hover:scale-150 hover:rotate-[360deg] transition ease-in-out duration-1000 cursor-pointer"
            onClick={props.onClick}
          />
          <div className="h-full flex flex-col justify-between py- px-8 sm:px-20 pt-8 sm:pt-16 md:pt-24 pb-8 md:pb-10">
            <div>
              <img src={logoDesign} alt="btrac technology" />
            </div>
            <div>
              <ul>
                {menuItems.map((item) => (
                  <li
                    className="text-white focus:text-[#8B8B8B] uppercase font-light my-4 text-[23px] flex justify-between cursor-pointer"
                    key={item.id}
                  >
                    <span>
                      <Link
                        to={item.path}
                        onClick={
                          !item.childMenu
                            ? props.onClick
                            : () => subMenuHandler(item.id)
                        }
                        className="relative"
                      >
                        {item.name}
                      </Link>
                      {subMenuIsOn && item.id === menuId && (
                        <SubMenu
                          item={item.childMenu}
                          onClick={props.onClick}
                          isOpen={subMenuIsOn}
                        />
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-sm mb-2">
                Get In Touch
              </h1>
              <p className="text-[#639BD1] text-xs">
                House 102, Road 13/C, Block E Banani, Dhaka-1213, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
