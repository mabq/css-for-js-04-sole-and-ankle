import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <VerticalAlign>
        <MainHeader>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Spacer />
        </MainHeader>
      </VerticalAlign>
    </header>
  );
};

const VerticalAlign = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  /* overflow: auto; */
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding: 0 32px;
`

const MainHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const LogoWrapper = styled.div`
  flex: 1 1 230px;
  min-width: 230px;
`

const Spacer = styled.div`
  flex: 1 1 230px;
`

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  padding: 6px 4px;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
