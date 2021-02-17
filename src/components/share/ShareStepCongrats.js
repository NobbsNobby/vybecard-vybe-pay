// Core
import React from "react";
import Confetti from "react-confetti";
import styled from "styled-components";
import { useSelector } from "react-redux";
// Instruments
import IconImage from "../../images/icn_check.svg";
import InstaIconImage from "../../images/icon_insta.svg";

const width = window.innerWidth;
const height = window.innerHeight;

const ShareStepCongrats = () => {
  //redux
  const firstName = useSelector((state) => state.firstName);
  const amount = useSelector((state) => state.amount);

  return (
    <>
      <main>
        <Wrapper>
          <div className="flex flex-col justify-center items-center">
            <Icon />
            <h1 className="Hero text-content-dark mb-2">Félicitations 🎉</h1>
            <p className="H2 text-content-dark_light text-center max-w-xs">
              {firstName} a reçu {amount}€ sur son compte Vybe
            </p>
          </div>
          <SocialContainer>
            <div className="flex items-center justify-center mb-2">
              <InstaIcon/>
              <span className="H3 text-content-dark">@vybecard</span>
            </div>
            <span className="body text-content-dark_light">
              Construis Vybe avec nous sur Insta ❤️
            </span>
          </SocialContainer>
        </Wrapper>
      </main>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={1000}
        initialVelocityY={10}
      />
    </>
  );
};

export default ShareStepCongrats;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  margin-bottom: 50px;
  width: 104px;
  height: 104px;
  background: url(${IconImage}) center center no-repeat;
`;

const InstaIcon = styled.span`
  display: block;
  margin-right: 8px;
  width: 26px;
  height: 26px;
  background: url(${InstaIconImage}) center center no-repeat;
`;

const SocialContainer = styled.div`
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #E4F4F5;
  box-shadow: 0 4px 7px rgba(31, 174, 185, 0.05);
  border-radius: 16px;
  
  background-color: #fff;
  @media (min-width: 768px) {
    display: none;
  }
  
`;
