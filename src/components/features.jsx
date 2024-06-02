import React from "react";

export const Features = (props) => {
  const fromHome = props?.fromHome;
  return (
    <>
      <div
        id="features"
        className="text-center container"
        style={{
          marginTop: "50px",
          paddingBottom: fromHome ? undefined : "50px",
          position: "relative",
          background: fromHome ? "none" : undefined,
          zIndex: "2",
        }}
      >
        {!fromHome ? (
          <div>
            {props?.showTitle && (
              <div className="section-title" style={{ paddingTop: "10px" }}>
                <h2>What we do</h2>
                <p>
                  Discover our core activities and services that drive our
                  mission forward.
                </p>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
        {props?.data ? (
          <div className="row">
            {props.data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="col-12 col-sm-6 col-md-4"
                style={{ marginBottom: "30px" }}
              >
                <i
                  className={d.icon}
                  style={{ fontSize: "2em", marginBottom: "10px" }}
                ></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};
