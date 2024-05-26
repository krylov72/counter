import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { SetCounter } from './components/SetCounter';
import styled from 'styled-components';

function App() {
  const [maxValue, setMaxValue] = useState<number>(5)
  const [startValue, setStartValue] = useState<number>(0)
  const [value, setValue] = useState<number>(0)
  
  const increaseCounter = () => {

      return value < maxValue ? setValue(value + 1) : ''
    
  }

  const resetCounter = () => {
    setValue(0)
  }

  const changeMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
    setMaxValue(e.currentTarget.valueAsNumber)
  }

  const changeStartValue = (e:ChangeEvent<HTMLInputElement>) => {
    setStartValue(e.currentTarget.valueAsNumber)
  }

  const setValues = (maxValue:number,startValue:number) => {
    setValue(startValue)
  }
  //Todo
  //Сделать логику (startValue)
  //Сделать фильтрацию

  

  return (
    <div className="App">
      <Wrapper>
      <SetCounter  maxValue={maxValue} startValue={startValue} changeMaxValue={changeMaxValue} changeStartValue={changeStartValue} setValues={setValues}/>
      <Counter value={value} increaseCounter={increaseCounter} resetCounter = {resetCounter} maxValue={maxValue} startValue={startValue}  />
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

