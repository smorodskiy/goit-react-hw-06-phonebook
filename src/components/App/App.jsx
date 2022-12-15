import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Section, Phonebook, Contacts, Filter } from 'components';

import { Container } from './App.styled';

// Generator ids
import { nanoid } from 'nanoid';
import { addContact, deleteContact } from 'redux/actions';

export const App = () => {
  // Global states
  const contacts = useSelector(state => state.contacts);
  // const [contacts, setContacts] = useState([]);
  const filter = useSelector(state => state.filter);
  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  // On mount
  useEffect(() => {
    try {
      // const contacts = localStorage.getItem('contacts');
      // const contactsParsed = JSON.parse(contacts);
      // if (contactsParsed !== null && contactsParsed.length > 0) {
      // console.log(contactsParsed);
      // setContacts(contactsParsed);
      // }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // On update "contacts" state
  useEffect(() => {
    try {
      // localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.log(error);
    }
  }, [contacts]);

  // Add contacts
  const handleAddContact = (e, name, number) => {
    e.preventDefault();
    const currentName = name;
    const currentNumber = number;

    // Check on exist contact
    const isExist = contacts.some(user => {
      return user.name === currentName;
    });
    if (isExist) {
      Notify.warning(`${currentName} is already exists`);
      return;
    }

    // Create obj of new user
    const currentUser = {
      id: nanoid(),
      name: currentName,
      number: currentNumber,
    };

    // Change contacts state
    // setContacts(prevState => [...prevState, currentUser]);
    dispatch(addContact(currentUser));
  };

  // Delete contact
  const handleDeleteContact = id => {
    // setContacts(prevContacts =>
    //   prevContacts.filter(({ id }) => id !== idToDel)
    // );
    dispatch(deleteContact(id));
    console.log(contacts);
  };

  // On input filter
  const handleInputFilter = e => {
    const newFilter = e.target.value;
    // setFilter(newFilter);
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
    <Container>
      <Section title="Phonebook">
        <Phonebook onSubmit={handleAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter onInputFilter={handleInputFilter} />
      </Section>

      <Contacts contacts={contactsToShow} onDeleteUser={handleDeleteContact} />
    </Container>
  );
};
