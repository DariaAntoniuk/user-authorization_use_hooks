import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { contactsSelectors, contactsOperations } from 'redux/contacts';

import Loader from 'components/Loader/Loader';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactList from 'components/ContactList/ContactList';
import ThemeButton from 'components/ThemeButton/ThemeButton';
import Notification from 'components/Notification/Notification';

class ContactsView extends Component {
    componentDidMount() {
        this.props.onFetchContacts();
    }

    render() {
        const { isContactsLength, isLoadingContacts, error } = this.props;

        return (
            <div>
                <CSSTransition in appear timeout={500} classNames="title-fade" unmountOnExit>
                    <h1 className="header">Phonebook</h1>
                </CSSTransition>

                <ContactForm />
                {isContactsLength > 1 && <ContactFilter />}

                {isLoadingContacts && <Loader align="center" />}
                {error && <Notification message={error} />}

                {!!isContactsLength && !error && <ContactList />}

                <ThemeButton />
            </div>
        );
    }
}

ContactsView.propTypes = {
    isContactsLength: PropTypes.bool.isRequired,
    isLoadingContacts: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isContactsLength: contactsSelectors.getContacts(state).length,
    isLoadingContacts: contactsSelectors.getLoading(state),
    error: contactsSelectors.getError(state),
});

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
