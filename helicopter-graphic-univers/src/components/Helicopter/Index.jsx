import React from 'react'
import styled from 'styled-components'
import Animation from '../Animation/Index';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-direction: column;
    align-items: center; */
    justify-content:center;
    /* border: 2px solid white; */
`


const Section = styled.div`
   width: 100%;
    &.move {
    /* Styles spécifiques à la classe "move" */
    animation: move-animation 6.5s infinite;
    /* border: 2px solid white; */
  }
  @keyframes move-animation {
    from {
        margin-left: 20%;
    }
    to {
        margin-left: -20%;
    }
}
`;


const Helico = styled.div`
     width: 350px;
     height: 250px;
     margin: 250px auto 0;
     /* border: 2px solid red; */
`


const Helicopter = () => {

    // Pour que l'animation soit responsive
    // const getImageSize = () => {
    //     const screenWidth = window.innerWidth;
      
    //     if (screenWidth <= 576) {
    //       // Pour les smartphones
    //       return "30px";
    //     } else if (screenWidth <= 992) {
    //       // Pour les tablettes
    //       return "50px";
    //     } else {
    //       // Pour les bureaux
    //       return "100px";
    //     }
    //   };
  return (
    <Container>
        <Section className="container move">
            <Helico>
                <Animation numberOfImages={2} dossierImages='./img/animations/helico/' imageFileName='helico' id='helico'/>
                {/* <Animation numberOfImages={18} imageFileName='cat' imageSize={getImageSize()} /> */}
            </Helico>           
        </Section>
    </Container>
  )
}

export default Helicopter