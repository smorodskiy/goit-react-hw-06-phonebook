import React from 'react';


// Components
import { Section, Phonebook, Contacts, Filter } from 'components';

// Styles
import { Container } from './App.styled';

export const App = () => {
 

  // On input filter
  const handleInputFilter = e => {
    const inputValue = e.target.value;
    // dispatch(filtersContact(inputValue));
  };

  return (
    <Container>
      <Section title="Phonebook">
        <Phonebook/>
      </Section>

      <Section title="Contacts">
        <Filter onInputFilter={handleInputFilter} />
      </Section>

      <Contacts />
    </Container>
  );
};
