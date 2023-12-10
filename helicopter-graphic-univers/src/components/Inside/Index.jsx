import React from 'react'
import styled from 'styled-components'
import ToTopButton from '../ToTopButton/Index'


const Section = styled.div`
  height: 100vh;
  /* Snapping effect */
  scroll-snap-align: center;
  /* border: 2px solid white; */
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
`;

const Container = styled.div`
  /* border: 2px solid green; */
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:50px;
  }
`;


const Left = styled.div`
    flex: 1;
    @media only screen and (max-width: 768px) {
    /* flex: 1;
    width: 100%; */
    display:flex;
    justify-content: center;
    align-items: center;   
  }

`;

const Title = styled.h1`
  font-size: 74px;


  @media only screen and (max-width: 768px) {
    font-size: 40px;
    /* border: 2px solid white; */
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  /* @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  } */
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    /* border: 2px solid green; */
    margin-right:10px;
    margin-left:10px;
  }
`;


const Img = styled.img`
  margin-top:150px;
  width: 600px;
  height: auto;
  /* border: 2px solid green; */
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    margin-top:0px;
    width: 280px;
    height: auto;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const ImgBird = styled.img`
  width: 100px;
  height: auto;
  /* border: 2px solid green; */
  transform: rotate(-5deg);
  animation: animateBird 2s infinite ease alternate;
  @keyframes animateBird {
    to {
      transform: translateX(10px);
    }
  }
`;

const BoxTopButton = styled.div`
  /* border: 2px solid green; */
  width:100px;
  margin-top:50px;
`
const PositionTopButton = styled.div`
 /* border: 2px solid green; */
 /* width: 500px; */
 display: flex;
 justify-content: flex-end;
`

const Inside = () => {
  return (
    <Section>
        <Container>    
        <Left>
          <Img src="./img/cockpit.png" />
        </Left>
        <Right>
          <Title>Inside</Title>
            <WhatWeDo>
              <Line src="./img/line.png" />
              <Subtitle>Travel in our creative helicopter</Subtitle>            
              <ImgBird src="./img/oiseauLeft.png" /> 
            </WhatWeDo>
            <Desc>
            Let's continue our navigation inside the helicopter...
             <br/>
             On board, every detail is thought to offer you a unique experience.
             <br/>
             Get ready to explore an interior where advanced technology merges with the most elegant design!
            </Desc>
           <PositionTopButton>
            <BoxTopButton>
              <ToTopButton />
            </BoxTopButton> 
           </PositionTopButton>      
        </Right>
      </Container>
    </Section>
  )
}


export default Inside
