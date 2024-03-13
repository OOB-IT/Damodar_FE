import React from "react";

export const Features = (props) => {
  return (
    <>
      <div
        id="features"
        className="text-center container"
        style={{
          marginTop: "50px", paddingBottom: "50px", position: "relative"
          , zIndex: "2"
        }}
      >
        <div className="section-title">
          <h2>What we do</h2>
          <p>
            Discover our core activities and services that drive our mission
            forward.
          </p>
        </div>
        {props.data
          ? props.data.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className="col-xs-6 col-sm-4 col-md-4 "
            >
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))
          : "Loading..."}
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
