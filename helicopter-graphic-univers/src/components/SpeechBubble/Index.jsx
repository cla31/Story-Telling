import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 

const SpeechBubbleContainer = styled.div`
  width: 300px;
  margin: 50px auto;
  background: transparent;
  border: 2px solid white;
  padding: 20px;
  text-align: center;
  color: #fff;
  position: relative;
  

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid white;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
    border-bottom: 10px solid transparent;
    left: 19px;
    bottom: -20px;
  }

  @media only screen and (max-width: 768px) {
  width: 200px;
  margin-bottom:5px;
}
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin-top:10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SpeechBubble = () => {
  return (
    <SpeechBubbleContainer>
        <div>
        Hello! 
        <br />
        My name is Plume Copter and I have the pleasure of introducing you
    my aerial works of art.
    <br />
    Remember! This is just a flight over preliminary ideas...
    <br />
    If you would like me to spread my artistic wings even further, I am
    ready to take into account all your suggestions...
    <br />
    In the meantime, take off for a taste of my Rotorian creations by following the link below:
        </div>   
      <NavLink to="/PageGraphic">
        <Button>Here</Button>
      </NavLink>
    </SpeechBubbleContainer>
  );
};

export default SpeechBubble;

