import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';

import { authOperation } from 'redux/auth';

const initialState = { name: '', email: '', password: '' };

const RegisterView = () => {
    const [{ name, email, password }, setState] = useState(initialState);
    const handleChangeState = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();

        dispatch(authOperation.register({ name, email, password }));
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

export default RegisterView;
