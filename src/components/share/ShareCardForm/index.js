// Core
import React from "react";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import { Button } from "@vybe/vybecard-design-systems";
import { useDispatch, useSelector } from "react-redux";
// Instruments
import { validationSchema } from "./helpers";
// Components
import ShareFooter from "../ShareFooter";
import BaseFormInputMask from "../../base/BaseFormInputMask";
import BaseFormInput from "../../base/BaseFormInput";
import Alert from '../../base/Alert'
// store
import { setStep } from "../../../store/reducers/shareReducer";

const ShareCardForm = () => {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
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
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(v) => {
          console.log(v);
          dispatch(setStep(2));
        }}
      >
        {({touched, errors, setErrors, values }) => (
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
                warning={
                  touched.name && !values.name && errors.name
                }
              />
            </div>

            <div className="col-span-2">
              <label
                className="H4 text-content-dark_light"
                htmlFor="cardNumber"
              >
                Numéro de la carte
              </label>
              <BaseFormInputMask
                name="cardNumber"
                id="cardNumber"
                autoComplete="cc-number"
                mask="0000 0000 0000 0000"
                unmask={true}
                placeholder="0000 0000 0000 0000"
                warning={
                  touched.cardNumber && !values.cardNumber && errors.cardNumber
                }
              />
            </div>

            <div>
              <label
                className="H4 text-content-dark_light"
                htmlFor="expireDate"
              >
                Date d’expiration
              </label>
              <BaseFormInputMask
                inputMode="numeric"
                pattern="[0-9]*"
                name="expireDate"
                id="expireDate"
                autoComplete="cc-exp"
                mask="00/00"
                placeholder="MM/YY"
                warning={
                  touched.expireDate && !values.expireDate && errors.expireDate
                }
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
                warning={
                  touched.cvc && !values.cvc && errors.cvc
                }
              />
            </div>
            <Button
              type="submit"
              className="col-span-2 mt-6 mb-4 btn-large btn-primary flex justify-center w-full"
            >
              Envoyer {amount}€
            </Button>
            {console.log(errors)}
            <Alert
                isShow={
                  Object.values(errors).filter((i) => i === 'required').length >
                  0 &&
                  Object.values(errors).filter((i) => i !== 'required').length ===
                  0
                }
                autoCloseFunction={() => setErrors({})}
                bgColor="#D50A6B"
                >
              <span>Veuillez remplir le(s) champ(s) manquant(s)</span>
            </Alert>
            <Alert
                isShow={
                  Object.values(errors).filter((i) => i === 'required').length === 0 &&
                      !!errors.cardNumber
                }
                autoCloseFunction={() => setErrors({})}
                bgColor="#D50A6B"
            >
              <span>Les numéros de la carte ne sont pas corrects</span>
            </Alert>
          </StyledForm>
        )}
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
