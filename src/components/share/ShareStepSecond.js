import React from "react";
import InitialsBlock from "./InitialsBlock";
import { useSelector } from "react-redux";
// Components
import ShareCardForm from "./ShareCardForm";

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
      <ShareCardForm/>
    </main>
  );
};

export default ShareStepSecond;
