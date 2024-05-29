import React from "react";
import styled from 'styled-components';
import Footer from './Footer';
import useViewType from "../utils/useViewType";
import Card from "./Card";

const SourcingAgentContainer = styled.div`
  padding: 150px 0 0 0;
  text-align: center;
`;
const HowWeWorkContainer = styled.div`
  padding: 0;
`;

const BottomContainer = styled.div`
    color: rgba(255, 255, 255, 0.75);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;



const Title = styled.h2`
  text-align: left;
  ${'' /* width: 150px; */}
  margin-bottom: 25px;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  padding:6px;
`;

const SourcingAgentPage = () => {
    const viewType = useViewType();
    const cardData = [
        { icon: 'fa fa-pencil-square-o', description: 'You will get totally transparent & satisfied work.' },
        { icon: 'fa fa-globe', description: 'Sourcing multiple products from different states.' },
        { icon: 'fa fa-eye', description: 'Personal watch on shipment since day 1 to manufacturing.' },
        { icon: 'fa fa-check-circle', description: 'We ensure about the quality of products & services.' },
        { icon: 'fa fa-university', description: 'We will be negotiate with banks behalf of you.' },
        { icon: 'fa fa-clock-o', description: 'You will get on time delivery of your consignment.' }
    ];
    return (
        <SourcingAgentContainer>
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Sourcing Agent</h2>
                    <p>We fulfill buyer needs, delivering orders on time.</p>
                </div>
                <HowWeWorkContainer>
                    <div className="container">
                        <div className="row justify-content-left text-justify">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <Title>How We Work</Title>
                                As a sourcing agent, our core responsibility revolves around meticulously managing all tasks essential for meeting our buyers' requirements and delivering their orders within specified timelines. Our approach is characterized by a commitment to understanding each client's unique needs, allowing us to provide personalized solutions that surpass expectations. From sourcing quality products to negotiating favorable terms, we handle every aspect of the procurement process with professionalism and efficiency. By anticipating challenges and fostering transparent communication, we ensure smooth operations and cultivate trust with both buyers and suppliers. Our ultimate goal is to serve as strategic allies, enhancing our clients' competitiveness in the global marketplace through excellence and customer satisfaction.
                            </div>
                            <div className="col-lg-7 col-md-10 col-sm-12" style={viewType === "desktop" ? { marginTop: "70px", marginLeft: "50px", fontSize: "2.3rem" } : { marginTop: "20px" }}>
                                <ul>
                                    <li><i className="fa fa-check-square-o saIcon" aria-hidden="true"></i> We find manufacturer as per buyer requirement.</li>
                                    <li><i className="fa fa-check-square-o saIcon" aria-hidden="true"></i> We negotiate and fix deal in suitable price range.</li>
                                    <li><i className="fa fa-check-square-o saIcon" aria-hidden="true"></i> We arrange transportation and handle full consignment.</li>
                                    <li><i className="fa fa-check-square-o saIcon" aria-hidden="true"></i> We can source products from multiple suppliers.</li>
                                </ul>
                            </div>
                            {/* <div className="col-lg-4 col-md-10 col-sm-12 saList" style={{ marginTop: "20px" }}>
                                <ul>
                                    <li><i className="icofont-check"></i> Solubility</li>
                                    <li><i className="icofont-check"></i> Adsorption</li>
                                    <li><i className="icofont-check"></i> Persistence</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </HowWeWorkContainer>
                <div className="container saCardContainer" style={viewType === "desktop" ? { marginTop: "50px", padding: "50px" } : { marginTop: "20px", padding: "20px" }}>
                    <h2>What Is Your Benefit?</h2>
                    <BottomContainer style={viewType === "desktop" ? { marginTop: "50px" } : { marginTop: "20px" }} >

                        {cardData.map((card, index) => (
                            <Card
                                key={index} // It's important to provide a unique key for each Card component
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </BottomContainer>
                </div>
            </div>
        </SourcingAgentContainer>
    )
}

export default SourcingAgentPage