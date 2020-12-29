// @flow

import React, { type Node } from 'react';
import styled, { css } from 'styled-components';

const successStyles = `
  color: #5c9210;
    margin: 10px 0;
`;
const dangerStyles = `
  color: #5c9210;
    margin: 10px 0;
`;

const ButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  @media (min-width: 500px) {
    padding: 5px;
  }

  ${({ success }) =>
    success
      ? css`
          ${successStyles}
        `
      : ``}

  ${({ danger }) =>
    danger
      ? css`
          ${dangerStyles}
        `
      : ``}
`;

type Props = {
  children: Node,
  clicked?: () => void,
  disabled?: boolean,
  btnType: string,
};

export const Button = ({
  children,
  clicked,
  disabled,
  btnType,
}: Props): Node => {
  return (
    <ButtonWrapper
      disabled={disabled}
      onClick={clicked}
      success={btnType === 'success'}
      danger={btnType === 'danger'}
    >
      {children}
    </ButtonWrapper>
  );
};
