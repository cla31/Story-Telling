import React from 'react'
import styled from 'styled-components'
import ToTopButton from '../ToTopButton/Index'



const Section = styled.div`
  height: 100vh;
  /* background-color:#85c994; */
  scroll-snap-align: center;
  /* border: 2px solid orange; */
  @media only screen and (max-width: 768px) {
    margin-top:500px;
    height: 500px;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:50%;
  }

`;

const Text = styled.div`
  font-weight: 200;
  font-size: 24px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const BoxText =styled.div`
margin-top:50px;
/* border: 2px solid green; */
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 768px) {
    /* border: 2px solid green; */
    margin-right:10px;
    margin-left:10px;
  }
`

const Left = styled.div`
  flex: 1;
  margin-top:50px;
  margin-left:150px;
  /* border: 2px solid pink; */
  @media only screen and (max-width: 768px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:0px;
  }
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
    width: 150px;
    height: auto;
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
    display:none;
  }

  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }
`;



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
        Narrative elevation...
          <br />
          <br />
          Now is the time to put your headset on, take some distance and let our winged narrator guide you through the different stages of a helicopter's life cycle...  
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