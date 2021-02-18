import React from "react";
import InitialsBlock from "./InitialsBlock";
import {useDispatch, useSelector} from "react-redux";
// Components
import ShareCardForm from "./ShareCardForm";
import Frames from "../checkout/Frames";
import ContentWrapper from "../base/ContentWrapper";
import styled from "styled-components";
import {Form} from "formik";
import BaseFormInput from "../base/BaseFormInput";

const ShareStepSecond = () => {
  const amount = useSelector((state) => state.amount);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const dispatch = useDispatch();


  return (
    <main>
      <InitialsBlock />
      <h1 className="H1 text-content-dark text-center mb-16">
        Envoyez <span className="text-status-success">{amount}€</span>
        <br />à {firstName} {lastName}
      </h1>
      <Frames
          config={{
            publicKey: 'pk_test_2071d405-7b8b-4fad-b9ad-1ddbec87f294',
            debug: true
          }}
          cardSubmitted={(e) => {
            console.log('--submitted--', e)
          }}
          cardTokenized={(e) => {
            console.log('--tokenized--', e)
          }}
      >
        <FormWrapper>
          <BaseFormInput
              className='col-span-2'
          />
          <InputFrame className="card-number-frame col-span-2" />
          <InputFrame className="expiry-date-frame" />
          <InputFrame className="cvv-frame" />
        </FormWrapper>
      </Frames>
      {/*<ShareCardForm/>*/}
    </main>
  );
};

export default ShareStepSecond;

const FormWrapper = styled.div`
  max-width: 350px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 9px 20px;
`;

const InputFrame = styled.div`
  margin: 8px 0;
  padding: 0 24px;
  
  height: 56px;
  border-radius: 8px;
  border: 1px solid #e4f4f5;

  font-family: "Nunito Black", sans-serif;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -.1px;
  
  background-color: #fff;
  &.frame--invalid {
    box-shadow: inset 0 0 0 2px #D50A6B;
    outline: none;
  }
  &.frame--focus {
    box-shadow: inset 0 0 0 2px #1e0e62;
    outline: none;
  }
`
