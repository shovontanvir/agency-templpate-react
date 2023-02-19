import React from "react";
import { Link } from "react-router-dom";

const SubMenu = (props) => {
  return (
    <ul className={`${props.isopen ? "z-[1001]" : "-z-[1001]"}`}>
      {props.item.map((cItem) => (
        <li className="my-4 cursor-pointer" key={cItem.id}>
          <Link to={cItem.path} onClick={props.onClick}>
            <h1 className="font-brand text-[15px] font-light text-white">
              {cItem.name}
            </h1>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
