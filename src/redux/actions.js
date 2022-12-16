export const loadFromStore = contacts => {
    return {
      type: 'contacts/loadFromStore',
      payload: contacts,
    };
  };  

export const addContact = contact => {
  return {
    type: 'contacts/add',
    payload: contact,
  };
};

export const deleteContact = id => {
    return {
        type: 'contacts/delete',
        payload: id,
    }
}

export const filtersContact = (name) => {
    return {
        type: 'contacts/filter',
        payload: name,
    }
}
