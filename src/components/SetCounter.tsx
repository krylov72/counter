
import styled from 'styled-components';
import { Button } from './Button';
import { ButtonWrapper } from './Counter';
import { ChangeEvent } from 'react';
type Props = {
   maxValue: number
   startValue: number
   changeMaxValue:(e:ChangeEvent<HTMLInputElement>) => void
   changeStartValue:(e:ChangeEvent<HTMLInputElement>) => void
   setValues: (maxValue:number,startValue:number) => void
};
export const SetCounter = ({maxValue,startValue,changeMaxValue,changeStartValue,setValues}: Props) => {

    const changeMaxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        changeMaxValue(e)
    }

    const changeStartValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        changeStartValue(e)
    }

    const setValuesHandler = () => {
        setValues(maxValue,startValue)
    }

    return (
        <SetCounterStyled>
            <ValueWrapper>
                <Wrapper>
                    <Value>max value:</Value>
                    <ValueInput value={maxValue} onChange={changeMaxValueHandler} type="number" />
                </Wrapper>
                <Wrapper>
                    <Value>start value:</Value>
                    <ValueInput value={startValue} onChange={changeStartValueHandler} type="number"  />
                </Wrapper>
            </ValueWrapper>
            <ButtonWrapper>
            <Button title='set' onClick={setValuesHandler}  disabled={false}/>
            </ButtonWrapper>
        </SetCounterStyled>
    );
};


const SetCounterStyled = styled.div`
    width:fit-content;
    border:2px solid #05cef1dd;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const ValueWrapper = styled.div`
border:2px solid #05cef1dd;
border-radius:5px;
padding:10px;
margin:10px;
display:flex;
flex-direction:column;
row-gap:20px;
`

const Wrapper = styled.div`
    display:flex;
    gap:20px;
    justify-content:space-between;
    

`

const Value = styled.p`
    white-space:nowrap;
    color:#05cef1dd;
    font-weight:bold;
    font-size:17px;
`

const ValueInput = styled.input`
width:120px;
`