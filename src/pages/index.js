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
import { setStep, setName } from "../store/reducers/shareReducer";
import ShareStepSecond from "../components/share/ShareStepSecond";

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
  }, [search]);

  // steps

  return (
    <main>
      <ContentWrapper>
        <ShareHeader />
        {step === 1 && <ShareStepFirst />}
        {step === 2 && <ShareStepSecond />}
        {step === 3 && <div>3</div>}
      </ContentWrapper>
    </main>
  );
};

export default IndexPage;
