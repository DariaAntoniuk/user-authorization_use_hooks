import styled from 'styled-components';

const Button = styled.button`
    margin-top: 10px;
    font-size: 16px;
    border-radius: 5px;
    padding: 10px 15px;
    outline: none;
    text-shadow: 0 0 1px #000;
    color: cornsilk;
    width: 100%;
    background-color: #4040bf;
    border: none;
    font-family: sans-serif;
    box-shadow: 0 2px 3px #808080;

    &:hover {
        cursor: pointer;
        background-color: #3939ac;
    }
`;

export const Styled = { Button };
