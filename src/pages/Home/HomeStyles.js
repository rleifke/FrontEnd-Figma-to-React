import { Link } from 'react-router-dom';
import styled from 'styled-components';
//

export const Wrapper = styled.section`
  width: 90vw;
  min-height: calc(calc(100vh - 115px) - 10vh);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.article`
  width: 100%;
  min-height: calc(calc(70vh - 115px) / 2);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    min-height: 45vh;
    &:first-of-type {
      margin-top: 1rem;
    }
  }
`;

export const TextContainer = styled.div`
  width: 40%;
  height: 20vh;
  display: block;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Header = styled.h1`
  color: var(--main-color);
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
  @media screen and (max-width: 1000px) {
    font-size: 37px;
    line-height: 40px;
  }
`;

export const Button = styled(Link)`
  padding: 12px 33px;
  background: var(--third-color);
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  border-radius: 5px;
  border: 1px solid var(--main-color);
  text-decoration: none;
  color: var(--main-color);
  font-weight: 600;
  font-size: 25px;
`;

export const CardContainer = styled.div`
  width: 50%;
  height: 20vh;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 460px;
  height: 153px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black);
  border: 6px solid var(--main-color);
  border-radius: 5px;
  @media screen and (max-width: 1000px) {
    height: 145px;
    width: 100%;
  }
`;

export const ContainerContentCard = styled.div`
  height: 75%;
  width: 90%;
  display: grid;
  margin: auto 5%;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: var(--main-color);
  font-weight: 700;
  padding: 0;
  margin: 0;
  margin-left: auto;
  @media screen and (max-width: 1000px) {
    font-size: 25px;
  }
`;

export const Amount = styled.h3`
  font-size: 50px;
  font-weight: 400;
  color: var(--main-color);
  padding: 0;
  margin: 0;
  margin-left: auto;
  @media screen and (max-width: 1000px) {
    font-size: 35px;
  }
`;

export const InfoCard = styled.article`
  width: 32%;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black);
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  border-radius: 5px;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 1rem 0;
    &:last-of-type {
      margin-bottom: 2rem;
    }
  }
`;

export const InfoCardContainer = styled.div`
  width: 90%;
  height: 70%;
  margin: auto 5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Image = styled.img`
  width: 42;
  height: auto;
  margin-right: 2rem;
`;

export const CardHeader = styled.h2`
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;
  color: var(--fourth-color);
  font-size: 14px;
  font-weight: 600;
`;

export const CardInfo = styled.h3`
  padding: 0;
  margin: 0;
  color: var(--main-color);
  font-size: 28px;
  font-weight: 400;
`;
