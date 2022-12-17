import React from 'react';

// Styles
import { Field } from 'components/base/Field/Field.styled';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  // On input filter
  const handleInputFilter = e => {
    const inputValue = e.target.value;
    dispatch(setFilter(inputValue));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <Field type="text" onChange={handleInputFilter} />
    </>
  );
};