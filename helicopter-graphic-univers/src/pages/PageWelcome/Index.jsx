import React from 'react'
import styled from 'styled-components'
import Bird from '../../components/Bird/Index'
import SpeechBubble from '../../components/SpeechBubble/Index'



const Container = styled.div`
  height: 100vh;
  background: url("./img/bg.jpeg");
  margin: 0;
  padding: 0;
`
const Title = styled.div`
  font-size: 50px;
  color: white;
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
`

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
      </BirdBox>
    </Container>
  )
}

export default PageBird