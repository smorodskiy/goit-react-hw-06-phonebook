import React from 'react';

import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

// Check types of props
// import PropTypes from 'prop-types';

import {
  DeleteButton,
  Contact,
  ContactInfo,
  ContactList,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Delete contact
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  // Filtering contacts by name
  const getFilteredContacts = filterName => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  // Preparing contacts to render(filtered or all)
  const contactsToShow =
    filter.length > 0 ? getFilteredContacts(filter) : contacts;

  return (
    <ContactList>
      {contactsToShow.map(contact => {
        return (
          <ContactInfo key={contact.id}>
            <Contact>
              {contact.name}: {contact.number}
            </Contact>
            <DeleteButton onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </DeleteButton>
          </ContactInfo>
        );
      })}
    </ContactList>
  );
};
