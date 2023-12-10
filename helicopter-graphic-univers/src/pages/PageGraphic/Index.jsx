import styled from 'styled-components'
import Hero from '../../components/Hero/Index'
import Outside from '../../components/Outside/Index'
import Inside from '../../components/Inside/Index'
import Overview from '../../components/Overview/Index'

const Container = styled.div`
  height: 100vh;
  /* Snapping effect */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  /* Delete scroll bar */
  scrollbar-width: none;
  color:white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display:none;
  }
`

const PageGraphic = () => {
  return (
    <Container>
      <div id="home">
        <Hero/>
      </div>     
      <div id="inside">
        <Inside/>
      </div>      
      <div id="outside">
        <Outside/>
      </div>      
      <div id="overview">
        <Overview/>
      </div>     
    </Container>
  );
}

export default PageGraphic;
