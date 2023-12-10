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
        Bonjour! 
        <br />
        Je m'appelle Plume Copter et j'ai le plaisir de vous présenter
    mes oeuvres d'art aériennes.
    <br />
   N'oubliez pas que ceci n'est qu'un vol d'idées préliminaires!
    <br />
    Si vous souhaitez que je déploie mes ailes artistiques encore plus loin, je suis 
    prêt à prendre en compte toutes vos suggestions... 
    <br />
    En attendant, envolez-vous pour un avant goût de mes créations rotoriennes en suivant le lien ci-dessous:
        </div>   
      <NavLink to="/PageGraphic">
        <Button>Here</Button>
      </NavLink>
    </SpeechBubbleContainer>
  );
};

export default SpeechBubble;

