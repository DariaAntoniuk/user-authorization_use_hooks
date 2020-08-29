import React from 'react';
import PropTypes from 'prop-types';

import { Styled } from './FormField.styles';

const FormField = ({ type = 'text', title, name, value, onChange }) => (
    <Styled.Label>
        {title}
        <Styled.Input type={type} name={name} value={value} onChange={onChange} />
    </Styled.Label>
);

FormField.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FormField;
