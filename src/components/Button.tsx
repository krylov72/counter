import * as React from 'react';
import styled from 'styled-components';
type Props = {
    title: string
    onClick: () => void
    disabled:boolean
};
export const Button = ({ title, onClick,disabled }: Props) => {
    return (
        <StyledBtn $disabled={disabled?true:false} disabled={disabled} onClick={onClick}>{title}</StyledBtn>
    );
};

d
const StyledBtn = styled.button<{$disabled:boolean}>`
    background-color: ${props=>props.$disabled?'#5a5a5add':'#05cef1dd'};
    cursor:${props=>props.$disabled?'none':'pointer'};
    font-weight:bold;
    box-shadow:1px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
    padding:0 10px;
    border-radius:5px;
        &:hover{
            transition:transform 0.2s ease-in;
            transform:translateY(2px)
        }
        &:not(:hover){
            transition:transform 0.2s ease-in;
            transform:translateY(0px)
        }
`