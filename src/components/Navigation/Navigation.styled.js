import styled from 'styled-components';
import { NavLink as DefaultNavLink } from 'react-router-dom';

const NavLink = styled(DefaultNavLink)`
    text-decoration: none;
    font-size: 18px;
    padding: 0 5px;
    color: grey;
    &.active {
        color: palevioletred;
    }
`;

export const Styled = { NavLink };
