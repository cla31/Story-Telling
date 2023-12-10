import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Section = styled.div`
 display: flex;
 justify-content: center;
`

const Container = styled.div`
  /* background-color: purple; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;


  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const BoxButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const StyledLink = styled.a`
    color: white; 
    text-decoration: none;
`;


const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                 <List>
                    <li><StyledLink href="#inside">Inside</StyledLink></li>
                    <li><StyledLink href="#outside">Outside</StyledLink></li>
                    <li><StyledLink href="#overview">Overview</StyledLink></li>
                 </List>
            </Links>
            <BoxButton>
                <NavLink to="/">
                    <Button>Bird Welcome</Button>
                </NavLink>
            </BoxButton>
        </Container>
    </Section>
  )
}

export default Navbar