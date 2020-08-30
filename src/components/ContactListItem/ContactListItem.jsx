import React, { useState } from 'react';
import { connect } from 'react-redux';

import { contactsOperations } from 'redux/contacts';

import { Styled } from './ContactListItem.styles';

const ContactListItem = ({ name, number, onRemove, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);

    const [{ userName, phoneNumber }, setState] = useState({ userName: name, phoneNumber: number });
    const handleChangeState = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleUpdateClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);

        onUpdate(userName, phoneNumber);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setState({ userName: name, phoneNumber: number });
    };

    return (
        <Styled.Item>
            {!isEditing ? (
                <>
                    <Styled.Container>
                        <Styled.Text>{name}</Styled.Text>
                        <span>{number}</span>
                    </Styled.Container>
                    <Styled.Image src="edit.png" alt="edit" onClick={handleUpdateClick} />
                </>
            ) : (
                <>
                    <Styled.Container>
                        <Styled.Input type="text" name="userName" value={userName} onChange={handleChangeState} />
                        <Styled.Input type="text" name="phoneNumber" value={phoneNumber} onChange={handleChangeState} />
                    </Styled.Container>

                    <Styled.Span>
                        <Styled.Image src="like.png" alt="save" onClick={handleSaveClick} />
                        <Styled.Image src="dislike.png" alt="cancel" onClick={handleCancelClick} />
                    </Styled.Span>
                </>
            )}

            <Styled.Image src="delete.png" alt="remove" onClick={onRemove} />
        </Styled.Item>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
    onUpdate: (name, number) => dispatch(contactsOperations.updateContact(ownProps.id, name, number)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
