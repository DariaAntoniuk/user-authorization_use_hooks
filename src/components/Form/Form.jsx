import React from 'react';
import PropTypes from 'prop-types';

import { Styled } from './Form.styles';

const Form = ({ children, onSubmit }) => <Styled.Form onSubmit={onSubmit}>{children}</Styled.Form>;

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
