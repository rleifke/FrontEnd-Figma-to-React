import React from 'react';
import Image from '../../images/logo.png';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

import {
  FooterWrapper,
  Wrapper,
  LogoContainer,
  Flex,
  LogoImage,
  LogoLink,
  Desc,
  Copy,
  LinksContainer,
  Header,
  Container,
  Content,
  LinksTo,
  LinksA,
  Line,
  CopyMobile,
} from './FooterStyles';
const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <LogoContainer>
          <Flex>
            <LogoImage src={Image} alt='logo' />
            <LogoLink to='/'>DAHLIA</LogoLink>
          </Flex>
          <Desc>
          Dahlia will be the first leveraged yield farming protocol on the Celo blockchain. Enabling
          yield farmers access to leverage and anyone to earn high yield on their idle assets.
          </Desc>
          <Copy>© 2021 Dahlia Finance . All rights reserved.</Copy>
        </LogoContainer>
        <LinksContainer>
          <Container>
            <Content>
              <Header>Menu</Header>
              <LinksTo to='/'>Farm Pools</LinksTo>
              <LinksTo to='/'>Earn</LinksTo>
              <LinksTo to='/'>Positions</LinksTo>
            </Content>
            <Content>
              <Header>Support</Header>
              <LinksA href='#'>Docs</LinksA>
              <LinksA href='#'>Blog</LinksA>
              <LinksA href='#'>Audit</LinksA>
            </Content>
            <Content>
              <Header>Connect</Header>
              <LinksA href='#'>
                <FaDiscord />
                Discord
              </LinksA>
              <LinksA href='#'>
                <FaTwitter />
                Twitter
              </LinksA>
            </Content>
          </Container>
        </LinksContainer>
        <CopyMobile>© 2021 Dahlia Finance . All rights reserved.</CopyMobile>
      </Wrapper>
      <Line />
    </FooterWrapper>
  );
};

export default Footer;
