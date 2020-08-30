import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';

import { authOperation } from 'redux/auth';

const RegisterView = ({ onRegister }) => {
    const [{ name, email, password }, setState] = useState({ name: '', email: '', password: '' });
    const handleChangeState = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        onRegister({ name, email, password });
    };

    return (
        <div>
            <h1 className="header">Register Page</h1>

            <Form onSubmit={handleSubmit}>
                <FormField title="Name" name="name" value={name} onChange={handleChangeState} />
                <FormField type="email" title="Email" name="email" value={email} onChange={handleChangeState} />
                <FormField
                    type="password"
                    title="Password"
                    name="password"
                    value={password}
                    onChange={handleChangeState}
                />

                <Button title="Register" />
            </Form>
        </div>
    );
};

RegisterView.propTypes = {
    onRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    onRegister: authOperation.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
