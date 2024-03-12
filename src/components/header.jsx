import React from "react";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text text-center'>
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
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
