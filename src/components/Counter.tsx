import * as React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
type Props = {
    value: number
    increaseCounter: () => void
    resetCounter: () => void
};
export const Counter = ({ value, increaseCounter, resetCounter}: Props) => {
    return (
        <CounterStyled>
            <CounterValue $max={value === 5 ? true : false}>
                {value}
            </CounterValue>
            <ButtonWrapper>
                <Button title='inc' onClick={increaseCounter} disabled={value === 5 ? true : false} />
                <Button title='reset' onClick={resetCounter} disabled={value < 5 ? true : false} />
            </ButtonWrapper>
        </CounterStyled>
    );
};

const CounterStyled = styled.div`
    border:2px solid #05cef1dd;
    border-radius:5px;
    width:100%;
    max-width:200px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const CounterValue = styled.p<{ $max?: boolean }>`
border:2px solid #05cef1dd;
border-radius:5px;
padding:10px;
margin:10px;
font-weight:bold;
color:white;
font-size:40px;
color:${props => props.$max ? 'red' : 'white'}
    
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