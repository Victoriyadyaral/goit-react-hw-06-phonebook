import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/actions';
import s from "./ContactList.module.css";

import ContactListItem from '../contactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
    console.log(contacts)
    return (
        <ul className={s.contactList}>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.array,
}

  const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
   
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

const mapStateToProps = ({ phonebook: {contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: ( id )=> dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);