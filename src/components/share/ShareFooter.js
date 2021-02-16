// Core
import React from "react";
// Instruments
import CardsLogo from "../../images/cards-logo.png";

const ShareFooter = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="mb-6 flex-shrink-0 flex-grow-0"
        src={CardsLogo}
        alt="payment methods"
      />
      <p className="label text-content-dark_light text-center max-w-xs">
        Les informations de paiement sont traitées par Checkout. Cette page est
        conçue par Vybe.
      </p>
    </div>
  );
};

export default ShareFooter;
