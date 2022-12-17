import React from 'react';

// Components
import { Section, Phonebook, Contacts, Filter } from 'components';

// Styles
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <Phonebook />
      </Section>

      <Section title="Contacts">
        <Filter />
      </Section>

      <Contacts />
    </Container>
  );
};
