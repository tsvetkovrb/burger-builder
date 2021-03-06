import styled from 'astroturf';

import { Logo } from 'src/components/Logo';
import { Backdrop } from 'src/components/UI';
import { NavigationItems } from '../NavigationItems';

const SideDrawerWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: var(--app-color-white);
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);

  &.isOpen {
    transform: translateX(0);
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

type Props = {
  onClick: () => void;
  isOpen: boolean;
  isAuth: boolean;
};

export const SideDrawer = ({ onClick, isOpen, isAuth }: Props) => (
  <>
    {isOpen && <Backdrop onClick={onClick} />}
    <SideDrawerWrapper onClick={onClick} isOpen={isOpen}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <nav>
        <NavigationItems isAuth={isAuth} />
      </nav>
    </SideDrawerWrapper>
  </>
);
