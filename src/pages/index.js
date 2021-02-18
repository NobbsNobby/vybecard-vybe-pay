// Core
import * as React from "react";
import { useLocation } from "@reach/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Instruments
// Components
import ContentWrapper from "../components/base/ContentWrapper";
import ShareHeader from "../components/share/ShareHeader";
import ShareStepFirst from "../components/share/ShareStepFirst";
// state
import { setName } from "../store/reducers/shareReducer";
import ShareStepSecond from "../components/share/ShareStepSecond";
import ShareStepCongrats from "../components/share/ShareStepCongrats";
import {Helmet} from "react-helmet";
import Frames from "../components/checkout/Frames";

const IndexPage = () => {
  // name
  const { search } = useLocation();
  //redux
  const step = useSelector((state) => state.step);
  const dispatch = useDispatch();

  useEffect(() => {
    const a = new URLSearchParams(search);
    if (a.get("u")) {
      dispatch(setName(a.get("u")));
    }
  }, [search, dispatch]);

  // steps

  return (
    <main>
      <ContentWrapper>
        {/*<form id="payment-form" method="POST" action="https://merchant.com/charge-card">*/}
        {/*  <div className="one-liner">*/}
        {/*    <div className="card-frame">*/}
        {/*    </div>*/}
        {/*    <p className="success-payment-message"></p>*/}

        {/*    <button id="pay-button" onClick={(e) => {*/}
        {/*      e.preventDefault();*/}
        {/*      console.log('click')*/}
        {/*      window.Frames.submitCard()*/}
        {/*    }}>*/}
        {/*      PAY GBP 24.99*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*  <p className="success-payment-message"></p>*/}
        {/*</form>*/}
        <ShareHeader />
        {step === 1 && <ShareStepFirst />}
        {step === 2 && <ShareStepSecond />}
        {step === 3 && <ShareStepCongrats/>}
      </ContentWrapper>
    </main>
  );
};

export default IndexPage;
