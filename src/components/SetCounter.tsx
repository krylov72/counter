
import styled from 'styled-components';
import { Button } from './Button';
import { ButtonWrapper } from './Counter';
type Props = {
   
};
export const SetCounter = ({}: Props) => {




    return (
        <SetCounterStyled>
            <ValueWrapper>
                <Wrapper>
                    <Value>max value:</Value>
                    <ValueInput   type="number" min='-100' max='100' step='1' />
                </Wrapper>
                <Wrapper>
                    <Value>start value:</Value>
                    <ValueInput  type="number" min='-100' max='100' step='1' />
                </Wrapper>
            </ValueWrapper>
            <ButtonWrapper>
            <Button title='set' onClick={() => {}}  disabled={false}/>
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