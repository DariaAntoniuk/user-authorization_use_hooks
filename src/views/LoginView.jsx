import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';

import { authOperation } from 'redux/auth';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin({ ...this.state });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h1 className="header">Login Page</h1>

                <Form onSubmit={this.handleSubmit}>
                    <FormField type="email" title="Email" name="email" value={email} onChange={this.handleChange} />
                    <FormField
                        type="password"
                        title="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />

                    <Button title="Login" />
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    onLogin: authOperation.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
