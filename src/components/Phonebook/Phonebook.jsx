import React from 'react';
import { useState } from 'react';

// Check types of props
// import PropTypes from 'prop-types';

// Styles
import { AddButton } from './Phonebook.styled';
import { Field } from 'components/base/Field/Field.styled';

// Generator ids
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

// Notify
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  console.log(contacts);
  // Add contacts
  const handleAddContact = (e, name, number) => {
    e.preventDefault();
    const currentName = name;
    const currentNumber = number;

    const isExist = contacts.some(user => {
      return user.name === currentName;
    });

    if (isExist) {
      Notify.warning(`${currentName} is already exists`);
      return;
    }

    const currentUser = {
      id: nanoid(),
      name: currentName,
      number: currentNumber,
    };

    dispatch(addContact(currentUser));
  };

  // On input name
  const handleInputName = e => {
    const newName = e.target.value;
    setName(newName);
  };

  // On input number
  const handleInputNumber = e => {
    const newNumber = e.target.value;
    setNumber(newNumber);
  };

  return (
    <form onSubmit={e => handleAddContact(e, name, number)}>
      <div>
        <p>Name</p>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputName}
        />
      </div>
      <div>
        <p>Number</p>
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputNumber}
        />
      </div>
      <AddButton type="submit">Add contact</AddButton>
    </form>
  );
};
