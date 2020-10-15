import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors, contactsOperations } from 'redux/contacts';

import Loader from 'components/Loader/Loader';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactList from 'components/ContactList/ContactList';
import ThemeButton from 'components/ThemeButton/ThemeButton';
import Notification from 'components/Notification/Notification';

const ContactsView = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    const contactsLength = useSelector(state => contactsSelectors.getContacts(state).length);
    const isLoadingContacts = useSelector(state => contactsSelectors.getLoading(state));
    const error = useSelector(state => contactsSelectors.getError(state));

    return (
        <div>
            <CSSTransition in appear timeout={500} classNames="title-fade" unmountOnExit>
                <h1 className="header">Phonebook</h1>
            </CSSTransition>

            <ContactForm />
            {contactsLength > 1 && <ContactFilter />}

            {isLoadingContacts && <Loader align="center" />}
            {error && <Notification message={error} />}

            {!!contactsLength && !error && <ContactList />}

            <ThemeButton />
        </div>
    );
};

export default ContactsView;
