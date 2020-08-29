import styled from 'styled-components';

const Layout = styled.div`
    max-width: 1170px;
    height: 100vh;
    margin: 0 auto;
    padding-left: 12px;
    padding-right: 12px;

    &.dark {
        background: #333333;
        color: #e6e6e6;

        form {
            box-shadow: 1px 2px 7px -1px rgba(0, 0, 0, 0.6), 0px 1px 1px 0px rgba(0, 0, 0, 0.34),
                0px 1px 3px 0px rgba(0, 0, 0, 0.32);
        }
    }

    & > div {
        width: 600px;
        margin: 0 auto;
    }
`;

export const Styled = { Layout };
