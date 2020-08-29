import styled from 'styled-components';

const Item = styled.li`
    margin: 5px 0;
    padding: 10px 15px;
    box-shadow: 1px 2px 7px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-family: sans-serif;
    font-size: 16px;
    border-radius: 3px;
`;

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

const Container = styled.span`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    line-height: 24px;
`;

const Text = styled.span`
    display: block;
    width: 55%;
`;

const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #4040bf;
    padding: 3px 10px;
    font-size: 14px;

    &:first-child {
        margin-right: 10px;
    }
`;

const Image = styled.img`
    width: 30px;
    padding-left: 20px;

    &:hover {
        cursor: pointer;
    }
`;

const Button = styled.button`
    background: beige;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 4px 15px;
    margin: 0 5px;
    outline: none;
    font-size: 14px;
    color: #444;
`;

const Span = styled.span`
    padding-right: 20px;
`;

export const Styled = { Item, Section, Container, Text, Input, Image, Button, Span };
