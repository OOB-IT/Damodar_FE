import React, { useEffect, useState } from "react";
import JsonData from "../data/data.json";
import styled from "styled-components";
import about from "../asset/about.jpg";
import { KeyPersons } from "./KeyPersons";

const AboutText = styled.div`
  background-color: rgba(255, 255, 255, 0.5); /* White with 70% opacity */
  border-radius: 10px;
`;
export const AboutUsDetail = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const data = landingPageData.About;
  return (
    <>
      <RandomElements />
      <div id="aboutDetail">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="Keysection-title">
                <h2>Key Persons</h2>
              </div>
              {/* <AboutText>
                <div className='about-text'>
                  <p>
                    {data ? data.paragraph1 + data.paragraph2 : "loading..."}
                  </p>
                  <p>
                    {data ? data.paragraph3 + data.paragraph4 : "loading..."}
                  </p>
                </div>
              </AboutText> */}
            </div>
          </div>
        </div>
      </div>
      <KeyPersons />
    </>
  );
};

const RandomElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      for (let i = 0; i < 12; i++) {
        const size = Math.random() * 20 + 15;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const color = `rgb(${Math.random() * 255},${Math.random() * 255},${
          Math.random() * 255
        },0.7)`;
        newElements.push({ size, top, left, color });
      }
      setElements(newElements);
    };
    generateElements();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      {elements.map((element, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: `${element.size}px`,
            height: `${element.size}px`,
            top: `${element.top}%`,
            left: `${element.left}%`,
            backgroundColor: element.color,
            borderRadius: "50%",
            zIndex: -1,
          }}
        />
      ))}
    </div>
  );
};

export default AboutUsDetail;
