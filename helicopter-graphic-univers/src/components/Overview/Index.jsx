import React from 'react'
import styled from 'styled-components'
import TableOverview from '../ChartOverview/Index'
import ToTopButton from '../ToTopButton/Index'


const Section = styled.div`
padding-top:200px;
  height: 100vh;
   /* Snapping effect (permet d'avoir le composant en entier..)*/
  scroll-snap-align: center;
  /* display: flex;
  justify-content: center; */
`;

const Title = styled.div`
 font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position:relative;

  &:after{
    content:"Overview";
    position: absolute;
    top:0;
    left:0;
    color:pink;
    width:0;
    overflow:hidden;
    white-space: nowrap;
  }
  
  &:hover{
    &:after{
      animation: moveText 0.5s linear both;

      @keyframes moveText{
        to{
          width: 100%;
        }
      }
    }
    
  }`

  const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  `
   const BoxTableOverview = styled.div`
   width:900px;
   /*display: flex;
   justify-content: center; */
     /* border: 2px solid blue; */
   `
   const CenterOverview =styled.div`
   display: flex;
   justify-content: center;
   /* border: 2px solid blue; */
   `
   const ImgBird = styled.img`
   width: 150px;
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

  const BoxTopButton = styled.div`
  /* border: 2px solid green; */
  width:100px;
  margin-top:50px;
  `
  const PositionTopButton = styled.div`
  /* border: 2px solid green; */
  /* width: 500px; */
  display: flex;
  justify-content: center;
  `
  export const Overview = () => {
    return (
      <>
        <Section>
          <BoxTitle>
            <Title>
              Overview
            </Title>
            <ImgBird src="./img/oiseauRight.png" />  
          </BoxTitle>        
          <br />
            <CenterOverview>
              <BoxTableOverview>
                <TableOverview/>
              </BoxTableOverview>  
            </CenterOverview>
            <PositionTopButton>
              <BoxTopButton>
                <ToTopButton />
              </BoxTopButton> 
            </PositionTopButton>         
        </Section>    
      </>
    )
  }

  export default Overview