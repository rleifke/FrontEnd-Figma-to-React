import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { navData } from '../../Data/NavigationData';
import { useGlobalContext } from '../../context/context';
import Image from '../../images/logo.svg';

const NavbarMain = () => {
  const { toggleNav } = useGlobalContext();
  return (
    <NavWrapper>
      <Wrapper>
        <Logo>
          <LogoImage src={Image} alt='Logo Image' />
          <LogoLink to='/'>DAHLIA</LogoLink>
        </Logo>
        <MenuBars onClick={toggleNav} />
        <NavMenu>
          {navData.map((item, index) => {
            return (
              <NavMenuLinks to={item.link} key={index}>
                {item.title}
              </NavMenuLinks>
            );
          })}
        </NavMenu>
        <Button href='#' target='_blank'>
          Connect Wallet
        </Button>
      </Wrapper>
    </NavWrapper>
  );
};

export default NavbarMain;

const NavWrapper = styled.nav`
  height: 115px;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 100;
  background: var(--third-color);
  box-shadow: 0px 0px 36px rgba(0, 211, 149, 0.66);
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const LogoImage = styled.img`
  color: var(--main-color);
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: var(--main-color);
  font-family: var(--montserrat-alternates);
  font-size: 36px;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
    color: var(--main-color);
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
`;

const Button = styled.a`
  border-radius: 5px;
  background: var(--third-color);
  padding: 12px 25px;
  border: 1px solid var(--main-color);
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  text-decoration: none;
  color: var(--main-color);
  font-size: 14px;
  @media screen and (max-width: 1000px) {
    display: none;
    visibility: hidden;
  }
`;
