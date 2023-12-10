import React from 'react'
import styled from 'styled-components'
import Bird from '../../components/Bird/Index'
import SpeechBubble from '../../components/SpeechBubble/Index'



const Container = styled.div`
  height: 100vh;
  background: url("./img/bg.jpeg");
  margin: 0;
  padding: 0;
  /* border: 2px solid red; */
  @media only screen and (max-width: 768px) {
    /* width: 100%;
    padding: 10px; */
}
`
const Title = styled.div`
  font-size: 50px;
  color: white;
  @media only screen and (max-width: 768px) {
  font-size: 30px;
}
`;


const BoxTitles = styled.div`
  padding-top:100px;
  /* border: 2px solid white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;   
`
const BoxSubtitle = styled.div`
  display: flex;
  align-items: center;
`;

const Subtitle = styled.div`
  color: #da4ea2;
`;

const BirdBox = styled.div`
    /* border: 2px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
     /* border: 2px solid white; */
  }
`
const ImgBird = styled.img`
  display:none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: auto;
    /* border: 2px solid green; */
    transform: rotate(-5deg);
    animation: animateBird 0.7s infinite ease alternate;
    @keyframes animateBird {
      to {
        transform: translateX(10px);
      }
    }
  }
`;




const PageBird = () => {
  return (
    <Container>
      <BoxTitles>
        <Title>Think. Make. Solve.</Title>
        <BoxSubtitle>
          <Subtitle>What we Do</Subtitle>
        </BoxSubtitle>
      </BoxTitles>
        <SpeechBubble/>
      <BirdBox>
        <Bird/>
        <ImgBird src="./img/oiseauLeft.png" />   
      </BirdBox>     
    </Container>
  )
}

export default PageBird