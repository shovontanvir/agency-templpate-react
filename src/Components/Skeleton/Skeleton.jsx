import React from "react";

const Layout = (props) => {
  return (
    <div className={`px-8 sm:px-20 md:px-36 flex flex-wrap ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Layout;
