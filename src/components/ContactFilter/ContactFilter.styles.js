import styled from 'styled-components';

const Filter = styled.div`
    margin: 25px 0;
    padding: 10px 15px 15px;
    border-radius: 2px;
    box-shadow: 1px 2px 7px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

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

export const Styled = { Filter, Label, Input };
