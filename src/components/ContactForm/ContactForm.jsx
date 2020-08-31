import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';

import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

const initialState = { name: '', number: '' };
const regexp = /^(\d{3,4}[-\s]?(\d{2}[-\s]?){2,3})$/;

const ContactForm = () => {
    const contacts = useSelector(state => contactsSelectors.getContacts(state));
    const dispatch = useDispatch();

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
        dispatch(contactsOperations.addContact(name, number));
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

export default ContactForm;
