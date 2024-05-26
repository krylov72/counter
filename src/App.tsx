import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { SetCounter } from './components/SetCounter';
import styled from 'styled-components';

function App() {
  const [maxValue, setMaxValue] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)
  const [value, setValue] = useState<number>(maxValue)
  
  const increaseCounter = () => {
    return value < 5 ? setValue(value + 1) : ''
  }

  const resetCounter = () => {
    setValue(maxValue)
  }

  const changeMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
    setMaxValue(e.currentTarget.valueAsNumber)
  }
  //Todo
  //Сделать логику (startValue)
  //Сделать фильтрацию

  console.log(maxValue);
  

  return (
    <div className="App">
      <Wrapper>
      <SetCounter  maxValue={maxValue} startValue={startValue} changeMaxValue={changeMaxValue}/>
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

