// Core
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@vybe/vybecard-design-systems";

// Instruments
import BgMobile from "../../images/share-bg-mobile.svg";
import BgDesktop from "../../images/share-bg-desktop.svg";
// state
import { setStep } from "../../store/reducers/shareReducer";


const InitialsBlock = () => {
  //redux
  const initials = useSelector((state) => state.initials);
  const step = useSelector((state) => state.step);
  const dispatch = useDispatch();

  return (
    <Name>
      {step !== 1 && (
        <StyledIcon
          name="arrowLeft"
          onClick={() => dispatch(setStep(1))}
        />
      )}
      <NameBadge>{initials}</NameBadge>
    </Name>
  );
};

export default InitialsBlock;

const Name = styled.div`
  position: relative;
  height: 130px;
  margin: -10px -24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  @media (min-width: 768px) {
    margin: -10px 0 0;
    height: 140px;
    align-items: flex-start;
    background-image: url(${BgDesktop});
    background-position: center 30px;
  }
`;

const NameBadge = styled.div`
  width: 86px;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 5px solid #ffffff;
  border-radius: 50%;

  font-family: "Nunito Black", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.6px;
  color: white;

  background: linear-gradient(179.53deg, #4fcfcf 12.98%, #00adc5 113.4%);
  box-shadow: 0 3.61905px 6.33333px rgba(31, 174, 185, 0.25);
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: calc(50% - 175px);
  top: 44px;
  width: 40px;
  height: 40px;
  border: 1px solid #E4F4F5;
  border-radius: 50%;
  background-color: #fff;
  color: #1E0E62;
  box-shadow: 0 4px 7px rgba(31, 174, 185, 0.05);
  cursor: pointer;
  @media (min-width: 768px) {
    top: 27px;
  }
`
