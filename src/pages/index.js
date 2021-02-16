// Core
import * as React from "react";
import styled from "styled-components";
import { Icon, Button } from "@vybe/vybecard-design-systems";
import { useLocation } from "@reach/router";
import { useEffect, useState } from "react";
// Instruments
import LogoImage from "../images/logo.svg";
import BgDesktop from "../images/share-bg-desktop.svg";
import BgMobile from "../images/share-bg-mobile.svg";
// Components
import ContentWrapper from "../components/base/ContentWrapper";
// import Input from "../components/base/Input";

// markup
const IndexPage = () => {
  const { search } = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const a = new URLSearchParams(search);
    setFirstName(a.get("u").split("_")[0]);
    setLastName(a.get("u").split("_")[1]);
  }, []);

  const getInitials = () => {
    return `${firstName[0]}${lastName[0]}`;
  };

  const getInputSize = () => {
    if (amount.length > 20) {
      return amount.length + 2;
    }
    if (amount.length > 13) {
      return amount.length + 1;
    }
    return amount.length || 1;
  };

  return (
    <main>
      <ContentWrapper>
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
        <main>
          <Name>
            <NameBadge>{getInitials()}</NameBadge>
          </Name>
          <h1 className="H1 text-content-dark text-center mb-16">
            Envoyer de l’argent à<br />
            {firstName} {lastName}
          </h1>
            <p className="mark text-content-dark_light text-center mb-3">
            Entrez un montant
          </p>
            <Label>
              <Input
                  size={getInputSize()}
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
              />
              <span>€</span>
            </Label>
            <Button
                className="btn-large btn-primary flex justify-center m-auto max-w-xs w-full"
                icon="arrowRight"
                iconPosition="right"
            >
              Continuer
            </Button>
        </main>
      </ContentWrapper>
    </main>
  );
};

export default IndexPage;

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

const Name = styled.div`
  height: 130px;
  margin: -10px -15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  @media (min-width: 768px) {
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

const Label = styled.label`
  width: fit-content;

  padding: 0 45px 0 30px;
  margin: 0 auto 29px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e4f4f5;

  font-family: "Nunito Black", sans-serif;
  font-size: 36px;
  text-align: right;
  line-height: 36px;

  letter-spacing: -0.6px;
  border-radius: 60px;
  color: #39bec8;

  box-shadow: 0 4px 7px rgba(31, 174, 185, 0.05);
  background: #ffffff;
  @media (min-width: 768px) {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  span {
    margin-top: -15px;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.4px;
    color: #39bec8;
  }
`;

const Input = styled.input`
  width: auto;
  margin: 0;
  outline: 0;
  border: none;
  background-color: transparent;
  text-align: right;
`;
