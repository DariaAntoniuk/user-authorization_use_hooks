import React from 'react';
import PropTypes from 'prop-types';

import { Styled } from './Button.styles';

const Button = ({ title }) => <Styled.Button>{title}</Styled.Button>;

Button.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Button;
