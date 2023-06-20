import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filterText, handleDeleteContact }) => {
  const buildMarkup = () => {
    const filteredContacts =
      contacts.length > 0
        ? filterText
          ? contacts.filter(contact =>
              contact.name
                .toLowerCase()
                .includes(filterText.trim().toLowerCase())
            )
          : contacts
        : [];

    const onDelete = contactId => {
      handleDeleteContact(contactId);
    };

    return filteredContacts.length > 0 ? (
      filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))
    ) : filteredContacts.length === 0 && contacts.length > 0 ? (
      <p>No matches for your filter :(</p>
    ) : (
      <p>There are no contacts in your phonebook =(</p>
    );
  };

  return (
    <div style={{ marginBottom: 230 }}>
      <ul>{buildMarkup()}</ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filterText: PropTypes.string.isRequired,
};
