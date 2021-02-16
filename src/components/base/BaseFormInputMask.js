// Core
import React from "react";
import { IMaskInput } from "react-imask";
import styled from "styled-components";
import { useFormikContext } from "formik";

const BaseFormInputMask = ({ name, mask, ...rest }) => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <StyledInput
      mask={mask}
      value={values[name]}
      onAccept={(value, mask) => {
        setFieldValue(name, value);
      }}
      {...rest}
    />
  );
};

const StyledInput = styled(IMaskInput)`
width: 100%;
  height: 56px;
  padding: 0 24px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #e4f4f5;

  font-family: "Nunito Black", sans-serif;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.1px;
  color: #1E0E62;
  box-shadow: ${({ error, warning }) => {
    if (error) {
      return "inset 0 0 0 2px #D50A6B;";
    }
    if (warning) {
      return "inset 0 0 0 2px #F2BA29;";
    }
    return "0 2px 4px rgba(6, 115, 123, 0.04);";
  }};
  &:focus {
    box-shadow: inset 0 0 0 2px #1e0e62;
    outline: none;
  }
`;

export default BaseFormInputMask;
