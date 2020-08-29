import React from 'react';

import { Styled } from './Form.styles';

const Form = ({ children, onSubmit }) => <Styled.Form onSubmit={onSubmit}>{children}</Styled.Form>;

export default Form;
