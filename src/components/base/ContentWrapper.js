// Core
import React from "react";
import styled from "styled-components";

const ContentWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default ContentWrapper;

const Wrapper = styled.div`
  max-width: 1140px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 24px 40px;
  display: grid;
  grid-template-rows: auto 1fr;
  @media (min-width: 768px) {
    padding: 0 15px 40px;
  }
`;
