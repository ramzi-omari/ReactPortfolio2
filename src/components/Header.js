import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web & android developement </h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Development",
            "Android native Developement",
            "Firebase",
            "Software Architecture-UML",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>
        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
