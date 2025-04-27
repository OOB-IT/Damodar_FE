import React from "react";
import p1 from "../asset/p1.jpeg"
import p2 from "../asset/p2.jpeg"
import p3 from "../asset/p3.png"

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
              <><div className="section-title" style={{ paddingTop: "10px" }}>
                <h2>Our Core Export Products</h2>
                <p>
                Paper Packaging Products – Including kraft paper bags, food-grade pouches, and shopping bags.
                </p>
                <p>
                Sugarcane Bagasse Tableware – 100% compostable plates, bowls, trays, and more.
                </p>
                <p>
                Adhesive Tapes – BOPP packing tapes, masking tapes, duct tapes, and custom variants.
                </p>
              </div>
              <img style={{borderRadius: '10px'}} src={p1} alt="img1" />
              <img style={{borderRadius: '10px'}} src={p2} alt="img2" />
              <h2> Driven by Vision, Powered by Experience</h2>
              <p>The entrepreneurial spirit and industry foresight of the founders of DAMODARR GLOBAL VENTURE LLP have transformed a modest beginning into a globally recognized export brand. Originating from the vibrant state of Gujarat, India, the company has steadily expanded its reach across the nation and into international markets with confidence and clarity.The entrepreneurial spirit and industry foresight of the founders of DAMODARR GLOBAL VENTURE LLP have transformed a modest beginning into a globally recognized export brand. Originating from the vibrant state of Gujarat, India, the company has steadily expanded its reach across the nation and into international markets with confidence and clarity.</p>
              <p>At DAMODARR, our focus goes beyond production. Our dedicated team is constantly exploring new markets, studying emerging global trends, and aligning our offerings with what modern buyers demand. We actively participate in national and international trade fairs, exhibitions, and business summits to stay ahead of the curve and strengthen our global footprint.</p>
              <p>Our sales and marketing professionals bring a strong understanding of customer requirements and international standards. With deep product knowledge and a commitment to service, they are continuously building new partnerships and elevating buyer relations worldwide.</p>
              <img style={{borderRadius: '10px'}} src={p3} alt="img3" />
              
              </>
            )}
          </div>
        ) : (
          ""
        )}
        {props?.data ? (
          <div className="row">
            {props.data.map((d, i) => (
              // <div
              //   key={`${d.title}-${i}`}
              //   className="container"
              //   style={{ marginBottom: "150px", marginTop: '100px' }}
              // >
              //   <i
              //     className={d.icon}
              //     style={{ fontSize: "2em", marginBottom: "10px" }}
              //   ></i>
              //   <h3>{d.title}</h3>
              //   <p>{d.text}</p>
              // </div>
              <></>
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};
