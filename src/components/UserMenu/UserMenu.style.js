import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Span = styled.span`
    font-size: 0.875rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 1.75;
    text-transform: uppercase;
    color: #b366ff;
    padding: 0 10px;
`;

export const Styled = { Nav, Image, Span };
