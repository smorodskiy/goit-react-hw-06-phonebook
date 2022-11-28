import React from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { AddButton } from './Phonebook.styled';
import { Field } from 'components/base/Field/Field.styled';
import { useState } from 'react';

export const Phonebook = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    <form onSubmit={e => onSubmit(e, name, number)}>
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

// Types
Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
