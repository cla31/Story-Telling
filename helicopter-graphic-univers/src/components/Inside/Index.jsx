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
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;


const Left = styled.div`
    flex: 1;

/* @media only screen and (max-width: 768px) {
  display: none;
} */
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
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
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
`;


const Img = styled.img`
  margin-top:150px;
  width: 600px;
  height: auto;
  /* border: 2px solid green; */
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
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
              <Subtitle>Voyagez dans notre hélicoptère créatif</Subtitle>            
              <ImgBird src="./img/oiseauLeft.png" /> 
            </WhatWeDo>
            <Desc>
             Poursuivons notre navigation à l'intérieur de l'hélicoptère...
             <br/>
             A bord, chaque détail est pensé pour vous offrir une expérience unique.
             <br/>
             Préparez-vous à explorer un intérieur où la technologie de pointe fusionne avec le design le plus élégant!
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
