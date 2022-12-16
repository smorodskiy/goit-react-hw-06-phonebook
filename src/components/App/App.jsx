import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Notify
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Components
import { Section, Phonebook, Contacts, Filter } from 'components';

// Styles
import { Container } from './App.styled';

// Generator ids
import { nanoid } from 'nanoid';

// Redux actions
import {
  addContact,
  deleteContact,
  filtersContact,
  loadFromStore,
} from 'redux/actions';

// Redux selectors
import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  // Global states
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Dispatcher
  const dispatch = useDispatch();

  // On mount
  useEffect(() => {
    try {
      const contacts = localStorage.getItem('contacts');
      const contactsParsed = JSON.parse(contacts);
      if (contactsParsed !== null && contactsParsed.length > 0) {
        dispatch(loadFromStore(contactsParsed));
        console.log(contacts);
        // setContacts(contactsParsed);
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

  // Delete contact
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  // On input filter
  const handleInputFilter = e => {
    const inputValue = e.target.value;
    dispatch(filtersContact(inputValue));
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
