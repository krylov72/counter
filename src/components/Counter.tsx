import * as React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
type Props = {
    value: number
    increaseCounter: () => void
    resetCounter: () => void
    maxValue:number
    startValue:number
    error:string
};
export const Counter = ({ value, increaseCounter, resetCounter,maxValue,startValue,error}: Props) => {

    const buttonIncFilter = () => {
        if (error) {
            return true
        } else {
            return value<maxValue?false:true
        }
    }

    const buttonResetFilter = () => {
        if (error) {
            return true
        } else {
            return value === maxValue?false:true
        }
    }
    return (
        <CounterStyled>
            <CounterValue $max={value === maxValue ? true : false}>
                {error !== ''?<ErrorSpan $error={error === 'Incorrect value'}>{error}</ErrorSpan>:<ValueSpan>{value}</ValueSpan>}
            </CounterValue>
            <ButtonWrapper>
                <Button title='inc' onClick={increaseCounter} disabled={buttonIncFilter()} />
                <Button title='reset' onClick={resetCounter} disabled={buttonResetFilter()} />
            </ButtonWrapper>
        </CounterStyled>
    );
};

const CounterStyled = styled.div`
    border:2px solid #05cef1dd;
    border-radius:5px;
    width:300px;
    /* max-width:300px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

const CounterValue = styled.p<{ $max?: boolean }>`
border:2px solid #05cef1dd;
border-radius:5px;
padding:10px;
margin:10px;
font-weight:bold;
color:white;
font-size:45px;
color:${props => props.$max ? 'red' : 'white'}

    
`

const ErrorSpan = styled.span<{$error?:boolean}>`
    font-size:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    color: ${props => props.$error?'#ce1414dd':'white'}
`
const ValueSpan = styled.span`
    
`

export const ButtonWrapper = styled.div`
border:2px solid #05cef1dd;
border-radius:5px;
padding:10px;
margin:10px;
display:flex;
gap:20px;
justify-content:center;
`