// @flow

import React, { type Node } from 'react';

import styled from 'styled-components';
import burgerLogo from '../../assets/images/burger-logo.png';

const LogoWrapper = styled.div`
  background-color: #fff;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Image = styled.img`
  height: 100%;
`;

export const Logo = (): Node => (
  <LogoWrapper>
    <Image src={burgerLogo} alt="MyBurger" />
  </LogoWrapper>
);
