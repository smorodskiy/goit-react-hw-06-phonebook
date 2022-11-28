import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Section, Phonebook, Contacts, Filter } from 'components';

import { Container } from './App.styled';

// Generator ids
import { nanoid } from 'nanoid';

export const App = () => {
  
  // Global states
  const contacts = useSelector(state => state.contacts);
  // const [contacts, setContacts] = useState([]);
  const filter = useSelector(state => state.filter);
  // const [filter, setFilter] = useState('');


  // On mount
  useEffect(() => {
    try {
      const contacts = localStorage.getItem('contacts');
      const contactsParsed = JSON.parse(contacts);

      if (contactsParsed !== null && contactsParsed.length > 0) {
        // setContacts(contactsParsed);
      } else {
        // setContacts([
        //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        // ]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // On update "contacts" state
  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
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

    // Change state
    // setContacts(prevState => [...prevState, currentUser]);
  };

  // Delete contact
  const handleDeleteContact = idToDel => {
    // setContacts(prevContacts =>
    //   prevContacts.filter(({ id }) => id !== idToDel)
    // );
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
