import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsSelectors, contactsAction } from 'redux/contacts';

import FormField from 'components/FormField/FormField';

import { Styled } from './ContactFilter.styles';

const ContactFilter = () => {
    const filter = useSelector(state => contactsSelectors.getFilter(state));
    const dispatch = useDispatch();

    const handleFilterContacts = e => dispatch(contactsAction.changeFilter(e.target.value));

    return (
        <Styled.Filter>
            <FormField title="Find contacts by name" value={filter} onChange={handleFilterContacts} />
        </Styled.Filter>
    );
};

export default ContactFilter;
