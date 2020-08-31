import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';

import { contactsSelectors } from 'redux/contacts';

import ContactListItem from '../ContactListItem/ContactListItem';

import { Styled } from './ContactList.styles';

const ContactList = () => {
    const contacts = useSelector(state => contactsSelectors.getVisibleContacts(state));

    return (
        <TransitionGroup component={Styled.List}>
            {contacts.map(contact => (
                <CSSTransition key={contact.id} timeout={250} classNames="contact-list">
                    <ContactListItem {...contact} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default ContactList;
