import React from 'react'
import styled from 'styled-components';
import JsonData from "../data/data.json";
const SourcingAgentContainer = styled.div`
  padding: 150px 0 0 0;
  text-align: center;
`;
const HowWeWorkContainer = styled.div`
  padding: 0;
`;

const Title = styled.h2`
  text-align: left;
  width: 50px;
  margin-bottom: 15px;
  background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
  padding:6px;
`;

const SourcingAgentPage = () => {
    return (
        <SourcingAgentContainer>
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Sourcing Agent</h2>
                    <p>We fulfill buyer needs, delivering orders on time.</p>
                </div>
                <HowWeWorkContainer>
                    <div className="container">
                        <Title>How We Work</Title>
                        <div className="row justify-content-left text-justify">
                            <div className="col-lg-4 col-md-10 col-sm-8">
                                As a sourcing agent, we manage all tasks necessary to fulfill the requirements of our buyers and deliver their orders according to their needs within the given timeline.
                            </div>
                        </div>
                    </div>
                </HowWeWorkContainer>
            </div>
        </SourcingAgentContainer>
    )
}

export default SourcingAgentPage