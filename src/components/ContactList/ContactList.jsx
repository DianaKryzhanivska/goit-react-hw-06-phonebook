import React from 'react';
// import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/contactForm/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactForm/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts
    ? contacts.filter(
        contact =>
          contact.name &&
          contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  <List>
    {filteredContacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <Button
            type="button"
            name="delete"
            onClick={() => handleDeleteContact(contact.id)}
          >
            delete
          </Button>
        }
      </Item>
    ))}
  </List>;
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
