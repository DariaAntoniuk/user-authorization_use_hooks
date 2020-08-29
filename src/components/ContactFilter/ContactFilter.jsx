import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactsSelectors, contactsAction } from 'redux/contacts';

import FormField from 'components/FormField/FormField';

import { Styled } from './ContactFilter.styles';

const ContactFilter = ({ filter, onChangeFilter }) => (
    <Styled.Filter>
        <FormField title="Find contacts by name" value={filter} onChange={e => onChangeFilter(e.target.value)} />
    </Styled.Filter>
);

ContactFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
    onChangeFilter: contactsAction.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
