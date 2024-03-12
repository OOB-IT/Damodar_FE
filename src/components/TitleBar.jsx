import React from "react";

const TitleBar = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        zIndex: "9",
        background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
        color: "#fff",
        paddingBottom: "3px",
      }}
    >
      <div className="container location">
        <a href="mailto:info@damodarr.com">
          <i className="fa fa-envelope-o"></i> info@damodarr.com
        </a>
        {/* <ul className="navbar-right">
          <li>
            {" "}
            <i className="fa fa-envelope-o"></i>
          </li>
          <li>
            {" "}
            <i className="fa fa-envelope-o"></i>
          </li>
          <li>
            <a href="#contact">
              {" "}
              <i className="fa fa-envelope-o"></i>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default TitleBar;
