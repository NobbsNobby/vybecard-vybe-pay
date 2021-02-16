// Core
import React from "react";
import styled from "styled-components";
import { Icon } from "@vybe/vybecard-design-systems";
// Instruments
import LogoImage from "../../images/logo.svg";

const ShareHeader = () => (
  <Header>
    <Logo src={LogoImage} alt="logo" />
    <Secure className="info text-content-grey">
      Site securisé
      <Icon
        name="lock"
        className=" ml-4 iconRound20 bg-content-grey text-content-white"
      />
    </Secure>
  </Header>
);

export default ShareHeader;

const Header = styled.header`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 82px;
`;

const Secure = styled.p`
  display: flex;
  align-items: center;
`;
