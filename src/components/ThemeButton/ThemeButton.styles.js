import styled from 'styled-components';

const Button = styled.button`
    margin-top: 10px;
    font-size: 16px;
    border-radius: 5px;
    padding: 10px 15px;
    outline: none;
    text-shadow: 0 0 1px #000;
    color: cornsilk;
    background: brown;
    opacity: 0.7;
    border: none;
    font-family: sans-serif;
    box-shadow: 0 2px 3px #808080;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        background: #ff66b3;
    }

    &.btn-dark {
        box-shadow: 0 2px 3px #0d0d0d;
    }

    &.btn-dark:hover {
        background: #800040;
    }
`;

export const Styled = { Button };
