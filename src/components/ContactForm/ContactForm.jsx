import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

const initialState = { name: '', number: '' };
const regexp = /^(\d{3,4}[-\s]?(\d{2}[-\s]?){2,3})$/;

const ContactForm = ({ contacts, onAddContact }) => {
    const [isExist, setIsExist] = useState(false);

    const [{ name, number }, setState] = useState(initialState);
    const handleChangeState = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        const isNumberValid = regexp.test(number);
        if (!isNumberValid) {
            alert('Please enter a valid number.');
            return;
        }

        const isAlreadyExist = contacts.some(contact => contact.name === name);
        if (isAlreadyExist) {
            setIsExist(true);
            setTimeout(() => setIsExist(false), 3000);
            return;
        }

        setState(initialState);
        onAddContact(name, number);
    };

    return (
        <>
            <CSSTransition in={isExist} timeout={250} classNames="alert-fade" unmountOnExit>
                <Alert />
            </CSSTransition>

            <Form onSubmit={handleSubmit}>
                <FormField title="Name" name="name" value={name} onChange={handleChangeState} />
                <FormField title="Number" name="number" value={number} onChange={handleChangeState} />
                <Button title="Add contact" />
            </Form>
        </>
    );
};

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
    onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
