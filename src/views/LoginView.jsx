import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';

import { authOperation } from 'redux/auth';

const LoginView = () => {
    const [{ email, password }, setState] = useState({ email: '', password: '' });
    const handleChangeState = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();

        dispatch(authOperation.logIn({ email, password }));
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

export default LoginView;
