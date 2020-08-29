import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <p>Whoops, something went wrong: {message}</p>;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
