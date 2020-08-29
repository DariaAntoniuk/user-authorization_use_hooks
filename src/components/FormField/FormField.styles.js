import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    padding: 5px 0;
    outline: none;
`;

const Input = styled.input`
    margin-top: 5px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    outline: none;

    &:focus {
        border-color: #4040bf;
    }
`;

export const Styled = { Label, Input };
