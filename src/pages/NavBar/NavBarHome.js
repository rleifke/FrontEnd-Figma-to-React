import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../../context/context';
import { navHomeData } from '../../Data/NavigationData';
import Image from '../../images/logo.svg';

const NavBarHome = () => {
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
          {navHomeData.map((item, index) => {
            return (
              <NavMenuLinks href={item.link} key={index}>
                {item.title}
              </NavMenuLinks>
            );
          })}
        </NavMenu>
      </Wrapper>
    </NavWrapper>
  );
};

export default NavBarHome;

const NavWrapper = styled.nav`
  height: 115px;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 100;
  background: var(--thrid-color);
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
const NavMenuLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
`;
