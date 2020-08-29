import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import { contactsSelectors } from 'redux/contacts';

import ContactListItem from '../ContactListItem/ContactListItem';

import { Styled } from './ContactList.styles';

const ContactList = ({ contacts }) => (
    <TransitionGroup component={Styled.List}>
        {contacts.map(contact => (
            <CSSTransition key={contact.id} timeout={250} classNames="contact-list">
                <ContactListItem {...contact} />
            </CSSTransition>
        ))}
    </TransitionGroup>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const mapStateToProps = state => ({
    contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
