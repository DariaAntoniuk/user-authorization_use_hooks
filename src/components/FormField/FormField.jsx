import React from 'react';

import { Styled } from './FormField.styles';

const FormField = ({ type = 'text', title, name, value, onChange }) => (
    <Styled.Label>
        {title}
        <Styled.Input type={type} name={name} value={value} onChange={onChange} />
    </Styled.Label>
);

export default FormField;
