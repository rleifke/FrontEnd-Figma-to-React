import React from 'react';
import { FarmPoolData } from '../../Data/FarmPoolData';
import Image from '../../images/background.png';
import {
  Wrapper,
  Container,
  Title,
  Description,
  CardContainer,
  SecondTitle,
  Flex,
  Button,
  InfoContainer,
  Header,
  Item,
  Background,
  Max,
} from './FarmPoolStyles';
import { Scrollbars } from 'react-custom-scrollbars';

const FarmPool = () => {
  return (
    <Wrapper>
      <Container>
        <Title>FARM POOLS</Title>
        <Description>
          Unlock leverage up to <span>2.5x</span>
        </Description>
      </Container>
      <CardContainer>
        <SecondTitle>All active pools</SecondTitle>
        <Flex>
          <Button className='active'>All</Button>
          <Button>Yield Farming</Button>
          <Button>Liquidity Providing</Button>
        </Flex>
        <InfoContainer>
          <Header>
            <h2>Pool</h2>
            <h2>Projected APY %</h2>
            <h2 className='center'>Pool APR</h2>
            <h2></h2>
            <h2>Borrow APR</h2>
            <h2>Max Leverage</h2>
            <h2></h2>
          </Header>
          <Max>
            <Scrollbars style={{ height: '100%' }}>
              {FarmPoolData.map((item, index) => {
                return (
                  <Item key={index}>
                    <div className='flexFirst'>
                      <img src={item.image1} alt='alt' className='image' />
                      <div className='block'>
                        <h3>{item.firstTitle}</h3>
                        <h2>{item.coins}</h2>
                      </div>
                    </div>
                    <div className='centerMiddle thin'>{item.percentage}</div>
                    <div className='centerMiddle thin'>
                      {item.percentageDecimal}
                    </div>
                    <div className='flex height'>
                      <div className='block'>
                        <h3>{item.yield}</h3>
                        <h3>{item.fees}</h3>
                        <h3>{item.alpha}</h3>
                      </div>
                      <div className='block left'>
                        <h2>{item.decimal}</h2>
                        <h2>{item.decimal}</h2>
                        <h2>{item.decimal}</h2>
                      </div>
                    </div>
                    <div className='flexColumn'>
                      <div className='flex margin'>
                        <img src={item.image2} alt='eth' />
                        <h2>{item.percentageDecimal}</h2>
                      </div>
                      <div className='flex'>
                        <img src={item.image3} alt='eth' />
                        <h2>{item.percentageDecimal}</h2>
                      </div>
                    </div>
                    <div className='centerMiddle large'>{item.times}</div>
                    <div className='end'>
                      <button>FARM</button>
                    </div>
                  </Item>
                );
              })}
            </Scrollbars>
          </Max>
        </InfoContainer>
      </CardContainer>
      <Background src={Image} alt='Background Logo' />
    </Wrapper>
  );
};

export default FarmPool;
