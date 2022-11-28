import React from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Field } from 'components/base/Field/Field.styled';

export const Filter = ({ onInputFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <Field type="text" onChange={onInputFilter} />
    </>
  );
};

// Types
Filter.propTypes = {
  onInputFilter: PropTypes.func.isRequired,
};
