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
  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  /* border: 2px solid red; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:50%;
  }
`;

const Left=styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 20px; */
  /* border: 2px solid green; */
  @media only screen and (max-width: 768px) {
    width:270px;

  }
`

const Title = styled.h1`
  font-size: 74px;
  /* border: 2px solid green; */
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
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
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Line = styled.img`
  height: 5px;
`;


const Right=styled.div`
  flex: 3;
  position: relative;
  /* border: 2px solid blue; */
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
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
  @media only screen and (max-width: 768px) {
    /* border: 2px solid blue; */
    width:200px;
    font-size: 12px;
    margin-left:20px;
  }
  

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


const TestHelicoGif = styled.div`
display:none;
@media (max-width: 768px) {
  display:flex;
  justify-content: center;
  align-items: center;   
  }
`
const GifHelico = styled.img`
width:270px;
height:auto;
margin-top:40px;

/* border: 2px solid red; */
`

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
        <Title>Digital takeoff</Title>
          <BoxSubtitle>
            <Line src="./img/line.png" />
            <Subtitle>Navigate in our graphic universe</Subtitle>
          </BoxSubtitle>
          <ImgBird src="./img/oiseauRight.png" />
          <SpeechBubbleContainerOne>
          <div>
          Fasten your seat belt!
             <br />
             Our digital helicopter is ready to give you a mind-blowing online experience!
             <br />
             Welcome on board! I will be your winged guide.
           </div>   
          </SpeechBubbleContainerOne>     
        </Left>
        <Right>
          <Helicopter/>
            <TestHelicoGif>
              <GifHelico src='./img/helico1.gif' alt='Helicoptère en mouvement'/>
            </TestHelicoGif>    
         </Right>
      </Container> 
    </Section>
  )
}

export default Hero