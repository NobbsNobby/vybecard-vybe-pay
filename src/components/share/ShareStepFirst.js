import React from "react";

import { Button } from "@vybe/vybecard-design-systems";
import ShareFooter from "./ShareFooter";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
// components
import InitialsBlock from "./InitialsBlock";
// state
import {setAmount, setStep} from "../../store/reducers/shareReducer";

const ShareStepFirst = () => {

  //redux
  const amount = useSelector((state) => state.amount);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const dispatch = useDispatch();

  // amount
  const getInputSize = () => {
    return amount.length ? amount.length * 22 : 22;
  };

  return (
  <main>
    <InitialsBlock />
    <h1 className="H1 text-content-dark text-center mb-16">
      Envoyer de l’argent à<br />
      {firstName} {lastName}
    </h1>
    <p className="mark text-content-dark_light text-center mb-3">
      Entrez un montant
    </p>
    <Label>
      <Input
        type="number"
        placeholder='0'
        inputWidth={getInputSize()}
        value={amount}
        onChange={(e) => dispatch(setAmount(e.target.value))}
      />
      <span>€</span>
    </Label>
    <Button
      className="mb-4 btn-large btn-primary flex justify-center m-auto max-w-xs w-full"
      icon="arrowRight"
      iconPosition="right"
      onClick={() => dispatch(setStep(2))}
      disabled={amount < 1}
    >
      Continuer
    </Button>
    <ShareFooter />
  </main>
)};

export default ShareStepFirst;

const Label = styled.label`
  width: fit-content;
  padding: 0 30px;
  margin: 0 auto 29px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e4f4f5;
  border-radius: 60px;
  box-shadow: 0 4px 7px rgba(31, 174, 185, 0.05);
  background: #ffffff;
  @media (min-width: 768px) {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  span {
    margin-top: -15px;
    margin-left: 5px;
    
    font-family: "Nunito Black", sans-serif;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.4px;
    color: #39bec8;
  }
`;

const Input = styled.input`
  width: ${({ inputWidth }) => inputWidth + "px"};
  margin: 0;
  outline: 0;
  border: none;

  font-family: "Nunito Black", sans-serif;
  font-size: 36px;
  text-align: center;
  line-height: 36px;
  letter-spacing: -0.6px;
  color: #39bec8;

  background-color: transparent;
`;
