// Core
import React from "react";
import styled from "styled-components";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@vybe/vybecard-design-systems";
import { useSelector } from "react-redux";
import valid from "card-validator";
// Components
import ShareFooter from "./ShareFooter";
import BaseFormInputMask from "../base/BaseFormInputMask";
import BaseFormInput from "../base/BaseFormInput";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  cardNumber: Yup.string()
    .required()
    .test("is-valid-card", "${path} is not valid", (value) => {
      console.log(valid.number(value))
      return valid.number(value).isValid;
    }),
  expireDate: Yup.string()
    .required()
    .matches(/^(?:0[1-9]|1[012])\/(?:0[1-9]|[12][0-9]|3[01])/, " do not match"),
  cvc: Yup.number().required(),
});

const ShareCardForm = () => {
  const amount = useSelector((state) => state.amount);

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: "",
          cardNumber: "",
          expireDate: "",
          cvc: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(v) => {
          console.log(v);
        }}
      >
        <StyledForm>
          <div className="col-span-2">
            <label className="H4 text-content-dark_light" htmlFor="name">
              Nom sur la carte
            </label>
            <Field
              as={BaseFormInput}
              name="name"
              id="name"
              autoComplete="cc-name"
            />
          </div>

          <div className="col-span-2">
            <label className="H4 text-content-dark_light" htmlFor="cardNumber">
              Numéro de la carte
            </label>
            <BaseFormInputMask
              name="cardNumber"
              id="cardNumber"
              autoComplete="cc-number"
              mask="0000 0000 0000 0000"
              unmask={true}
              placeholder="0000 0000 0000 0000"
            />
          </div>

          <div>
            <label className="H4 text-content-dark_light" htmlFor="expireDate">
              Date d’expiration
            </label>
            <BaseFormInputMask
              inputmode="numeric"
              pattern="[0-9]*"
              name="expireDate"
              id="expireDate"
              autoComplete="cc-exp"
              mask="00/00"
              placeholder="MM/YY"
            />
          </div>

          <div>
            <label className="H4 text-content-dark_light" htmlFor="cvc">
              Code de securité (CVV)
            </label>
            <Field
              as={BaseFormInput}
              type="number"
              name="cvc"
              id="cvc"
              autoComplete="cc-csc"
            />
          </div>
          <Button
            type="submit"
            className="col-span-2 mt-6 mb-4 btn-large btn-primary flex justify-center w-full"
          >
            Envoyer {amount}€
          </Button>
        </StyledForm>
      </Formik>
      <ShareFooter />
    </FormWrapper>
  );
};

export default ShareCardForm;

const FormWrapper = styled.div`
  max-width: 350px;
  margin: 0 auto;
`;

const StyledForm = styled(Form)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 9px 20px;
`;
