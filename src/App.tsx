import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { SetCounter } from './components/SetCounter';
import styled from 'styled-components';

function App() {

  const [value, setValue] = useState<number>(0)
  const increaseCounter = () => {
    return value < 5 ? setValue(value + 1) : ''
  }

  const resetCounter = () => {
    setValue(0)
  }



  return (
    <div className="App">
      <Wrapper>
      <SetCounter />
      <Counter value={value} increaseCounter={increaseCounter} resetCounter = {resetCounter} />
      </Wrapper>
      
    </div>
  );
}

const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  gap:40px;
`
export default App;

