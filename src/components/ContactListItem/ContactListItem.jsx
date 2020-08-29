import React, { Component } from 'react';
import { connect } from 'react-redux';

import { contactsOperations } from 'redux/contacts';

import { Styled } from './ContactListItem.styles';

class ContactListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            userName: props.name,
            phoneNumber: props.number,
        };
    }

    onUpdateClick = () => {
        this.setState({
            isEditing: true,
        });
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };

    onSaveClick = () => {
        this.setState({
            isEditing: false,
        });

        const { userName, phoneNumber } = this.state;
        this.props.onUpdate(userName, phoneNumber);
    };

    onCancelClick = () => {
        const { name, number } = this.props;

        this.setState({
            isEditing: false,
            userName: name,
            phoneNumber: number,
        });
    };

    render() {
        const { name, number, onRemove } = this.props;
        const { isEditing, userName, phoneNumber } = this.state;

        return (
            <Styled.Item>
                {!isEditing ? (
                    <>
                        <Styled.Container>
                            <Styled.Text>{name}</Styled.Text>
                            <span>{number}</span>
                        </Styled.Container>
                        <Styled.Image src="edit.png" alt="edit" onClick={this.onUpdateClick} />
                    </>
                ) : (
                    <>
                        <Styled.Container>
                            <Styled.Input type="text" name="userName" value={userName} onChange={this.handleChange} />
                            <Styled.Input
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={this.handleChange}
                            />
                        </Styled.Container>

                        <Styled.Span>
                            <Styled.Image src="like.png" alt="save" onClick={this.onSaveClick} />
                            <Styled.Image src="dislike.png" alt="cancel" onClick={this.onCancelClick} />
                        </Styled.Span>
                    </>
                )}

                <Styled.Image src="delete.png" alt="remove" onClick={onRemove} />
            </Styled.Item>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
    onUpdate: (name, number) => dispatch(contactsOperations.updateContact(ownProps.id, name, number)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
