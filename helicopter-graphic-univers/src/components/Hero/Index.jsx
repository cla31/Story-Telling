import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Index'
import Helicopter from '../Helicopter/Index';


const Section = styled.div`
  height: 100vh;
   /* Snapping effect */
  scroll-snap-align: center;
  /* border: 2px solid orange; */
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  /* border: 2px solid red; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left=styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 20px; */
  /* border: 2px solid green; */
`

const Title = styled.h1`
  font-size: 74px;
  /* border: 2px solid green; */
`;

const BoxSubtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  /* border: 2px solid green; */
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  /* border: 2px solid green; */
`;

const Line = styled.img`
  height: 5px;
`;


const Right=styled.div`
  flex: 3;
  position: relative;
  /* border: 2px solid blue; */
`

const SpeechBubbleContainerOne = styled.div`
  width: 300px;
  margin-left:100px;
  background: transparent;
  border: 2px solid white;
  padding: 20px;
  text-align: center;
  color: #fff;
  position: relative;
  border-radius:75px;
  

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid white;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid white;
    left: 55px;
    top: -20px;
  }
`;

const ImgBird = styled.img`
  width: 100px;
  height: auto;
  /* border: 2px solid green; */
  transform: rotate(-5deg);
  animation: animateBird 1s infinite ease alternate;
  @keyframes animateBird {
    to {
      transform: translateX(10px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
        <Title>Envol numérique</Title>
          <BoxSubtitle>
            <Line src="./img/line.png" />
            <Subtitle>Naviguez dans notre univers graphique</Subtitle>
          </BoxSubtitle>
          {/* <SpeechBubble/> */}
          <ImgBird src="./img/oiseauRight.png" />
          <SpeechBubbleContainerOne>
          <div>
             Attachez vos ceintures!
             <br />
             Notre hélicoptère numérique est prêt à vous faire vivre une expérience en ligne qui décoiffe!
             <br />
             Bienvenue à bord, je serai votre guide ailé.
           </div>   
          </SpeechBubbleContainerOne>     
        </Left>
        <Right>
          <Helicopter/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero