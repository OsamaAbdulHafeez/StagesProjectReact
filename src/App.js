import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Stages from './Components/Stages';
import Texts from './Components/Texts';
import Buttons from './Components/Buttons';
import styled from 'styled-components';


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  background-color: aliceblue;
  width: 60%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
function App() {
  const [level,setLevel] = useState(1)
  return (
    <Container>
      <Wrapper>
        <Stages level={level}/>
        <Texts level={level}/>
        <Buttons level={level} setLevel={setLevel}/>
      </Wrapper>
    </Container>
  );
}

export default App;
