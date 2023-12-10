import React from 'react'
import styled from 'styled-components'
import ToTopButton from '../ToTopButton/Index'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Text = styled.div`
  font-weight: 200;
  font-size: 24px;
`;
const BoxText =styled.div`
margin-top:50px;
/* border: 2px solid green; */
display: flex;
align-items: center;
justify-content: center;
`

const Left = styled.div`
  flex: 1;
  margin-top:50px;
  margin-left:150px;
  /* border: 2px solid pink; */
  /* @media only screen and (max-width: 768px) {
    justify-content: center;
  } */
`;

const Right = styled.div`
  flex: 1;
   /* border: 2px solid green; */
  @media only screen and (max-width: 768px) {
    display: none;
  }

`;

const Img = styled.img`
  width: 300px;
  height: auto;
  /* border: 2px solid green; */
  animation: animate 1s infinite ease alternate;

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

const ImgMap = styled.img`
  width: 100%;
  height: auto;
  /* border: 2px solid green; */
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }
`;

const Section = styled.div`
  height: 100vh;
  /* background-color:#85c994; */
  scroll-snap-align: center;
`

const BoxTopButton = styled.div`
  /* border: 2px solid green; */
  width:100px;
  margin-top:40px;
`
const PositionTopButton = styled.div`
 /* border: 2px solid green; */
 /* width: 500px; */
 display: flex;
 justify-content: flex-start;
 padding-bottom: 25px;
`

export const Outside = () => {
  return (
    <Section>
    <Container>
     <Left>
      <Img src="./img/casque.png" />
      <BoxText>
        <Text>
          Elévation narrative...
          <br />
          <br />
          C'est le moment maintenant de poser votre casque sur les oreilles, prendre de la hauteur et de vous laisser guider par notre guide ailé à travers les différentes étapes du cycle de vie d'un hélicoptère...
        </Text>
      </BoxText>
      <PositionTopButton>
        <BoxTopButton>
          <ToTopButton />
        </BoxTopButton> 
      </PositionTopButton>         
     </Left>
     <Right>
      <ImgMap src="./img/mapEurope.png" />
     </Right>
   </Container>   
 </Section>
  )
}

export default Outside