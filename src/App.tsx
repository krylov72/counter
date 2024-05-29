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
  const [error,setError] = useState<string>('enter value and press \'set\'')


  useEffect(() => {
    setStartValue(startValue)
  },[startValue])
  
  const increaseCounter = () => {

      return value < maxValue ? setValue(value + 1) : ''
    
  }

  const resetCounter = () => {
    setValue(0)
    setError('enter value and press \'set\'')
    
  }


//FILTERS
  const changeMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
    const maxValueFilter = e.currentTarget.valueAsNumber<0 || e.currentTarget.valueAsNumber === startValue || e.currentTarget.valueAsNumber<startValue
    if(maxValueFilter)  {
      setError('Incorrect value')
    } else  {
      setError('enter value and press \'set\'')
    }
    setMaxValue(e.currentTarget.valueAsNumber)
  }

  const changeStartValue = (e:ChangeEvent<HTMLInputElement>) => {
    const StartValueFilter = e.currentTarget.valueAsNumber<0 || e.currentTarget.valueAsNumber === maxValue || e.currentTarget.valueAsNumber>maxValue
    if(StartValueFilter) {
      setError('Incorrect value')
    } else  {
      setError('enter value and press \'set\'')
    }
    setStartValue(e.currentTarget.valueAsNumber)

}



  const setValues = (maxValue:number,startValue:number) => {
      setValue(startValue)
    setMaxValue(maxValue)
    setError('')
  
    
  }
  

  return (
    <div className="App">
      <Wrapper>
      <SetCounter  maxValue={maxValue} startValue={startValue} changeMaxValue={changeMaxValue} changeStartValue={changeStartValue} setValues={setValues} error= {error} />
      <Counter value={value} increaseCounter={increaseCounter} resetCounter = {resetCounter} maxValue={maxValue} startValue={startValue} error={error} />
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

