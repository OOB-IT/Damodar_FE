import React from "react";
import bgVideo from "../asset/video.mp4";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <video autoPlay muted loop id="background-video">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text text-center">
                <h1 style={{ fontSize: "3rem" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p style={{ fontSize: "2rem", margin: "1rem 0" }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <p style={{ fontSize: "2rem", margin: "1rem 0" }}>
                  {props.data ? props.data.paragraph2 : "Loading"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
