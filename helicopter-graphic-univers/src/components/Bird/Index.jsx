import React from 'react'
import Animation from '../Animation/Index'
import styled from 'styled-components'

const Container = styled.div`
  @media (max-width: 768px) {
    display: none; 
  }
`
const Bird = () => {
  return ( 
    <>
      <Container>
        <Animation numberOfImages={39} dossierImages='./img/animations/bird/' imageFileName='oiseau' id='bird'/>
      </Container> 
    </>                  
  )
}

export default Bird

