import React from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
};

// Types
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
