// Core
import PropTypes from 'prop-types';
import React, {useEffect} from "react";
import styled from "styled-components";

const Alert = ({ children, isShow, autoCloseFunction, autoCloseDelay = 3000, bgColor = '#39BEC8' }) => {
  useEffect(() => {
    if(isShow && !!autoCloseFunction) {
      setTimeout(() => {
        autoCloseFunction()
      }, autoCloseDelay)
    }
  })

  return (
      <StyledAlert isShow={isShow} bgColor={bgColor}>{children}</StyledAlert>
  )
};

export default Alert;

const StyledAlert = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding: 10px 0;
  font-family: "Nunito Bold", sans-serif;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.1px;
  color: white;
  background-color: ${({bgColor}) => bgColor};
  transform: ${({ isShow }) => (isShow ? "translateY(0)" : "translateY(100%)")};
  transition: all 0.24s ease-in-out;
  & > * {
    &:first-child {
      padding-top: 15px;
    }
    &:last-child {
      padding-bottom: 15px;
    }
  }
`;

Alert.propTypes = {
  autoCloseFunction: PropTypes.func,
  autoCloseDelay: PropTypes.number,
  children: PropTypes.any,
  isShow: PropTypes.any.isRequired,
  bgColor: PropTypes.string
}
