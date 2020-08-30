import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';

import { authOperation } from 'redux/auth';

const LoginView = ({ onLogin }) => {
    const [{ email, password }, setState] = useState({ email: '', password: '' });
    const handleChangeState = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        onLogin({ email, password });
    };

    return (
        <div>
            <h1 className="header">Login Page</h1>

            <Form onSubmit={handleSubmit}>
                <FormField type="email" title="Email" name="email" value={email} onChange={handleChangeState} />
                <FormField
                    type="password"
                    title="Password"
                    name="password"
                    value={password}
                    onChange={handleChangeState}
                />

                <Button title="Login" />
            </Form>
        </div>
    );
};

LoginView.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    onLogin: authOperation.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
