import React from "react";
import InitialsBlock from "./InitialsBlock";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ShareStepSecond = () => {
  const amount = useSelector((state) => state.amount);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  return (
    <main>
      <InitialsBlock />
      <h1 className="H1 text-content-dark text-center mb-16">
        Envoyez <span className="text-status-success">{amount}€</span>
        <br />à {firstName} {lastName}
      </h1>
      <FormWrapper>
        <label>
          <span>Nom sur la carte</span>
          <input
            name="ccname"
            required
            placeholder="Full Name"
            autocomplete="cc-name"
          />
        </label>
        <label>
          <span>Numéro de la carte</span>
          <input name="cardnumber" required autocomplete="cc-number" />
        </label>
        <label>
          <span>Date d’expiration</span>
          <input
            name="cc-exp"
            required
            placeholder="MM/YY"
            autocomplete="cc-exp"
          />
        </label>
        <label>
          <span>Code de securité (CVV)</span>
          <input name="cvc" required autocomplete="cc-csc" />
        </label>
      </FormWrapper>
    </main>
  );
};

export default ShareStepSecond;

const FormWrapper = styled.div`
  max-width: 350px;
  margin: 0 auto;
`
