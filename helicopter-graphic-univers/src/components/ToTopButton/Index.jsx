import React from 'react'
import styled from 'styled-components';


const Container =styled.div`
    text-align: center;
    font-size: 100%;
    /* margin: 2em; */
    font-family: Calibri, arial, sans-serif;
`
const ToTopLink = styled.a`
  color: white;
  padding-top: 1.8em;
  display: inline-block;
  position: relative;
  border-color: white;
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:before {
    content: '▲';
    font-size: 0.9em;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -0.7em;
    border: solid 0.13em white;
    border-radius: 10em;
    width: 1.4em;
    height: 1.4em;
    line-height: 1.3em;
    border-color: inherit;
    transition: transform 0.5s ease-in;
  }

  &:hover {
    color: #da4ea2;
    border-color: #da4ea2;

    &:before {
      transform: rotate(360deg);
    }
  }
`;



const ToTopButton = () => {
  return (
    <Container>
        <ToTopLink href="#home">Back to top</ToTopLink>
    </Container>
  );
};

export default ToTopButton;


