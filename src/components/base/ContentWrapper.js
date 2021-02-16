// Core
import React from "react";
import styled from "styled-components";

const ContentWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default ContentWrapper;

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 24px;
  @media (min-width: 768px) {
    padding: 15px;
  }
`;
