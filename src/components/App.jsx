import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const [state, setState] = useState({ contacts: [], filterText: '' });
  const { contacts, filterText } = state;
  const storageKey = 'contacts';

  useEffect(() => {
    const storedContacts = localStorage.getItem(storageKey);
    if (storedContacts) {
      setState(prevState => ({
        ...prevState,
        contacts: JSON.parse(storedContacts),
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddingNewContact = newContact => {
    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  const handleSavingFilter = newFilter => {
    setState(prevState => ({
      ...prevState,
      filterText: newFilter,
    }));
  };

  const handleDeleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setState(prevState => ({
      ...prevState,
      contacts: updatedContacts,
    }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        color: '#010101',
        backgroundColor: 'orange',
        gap: 50,
      }}
    >
      <h1>Life cycle Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={handleAddingNewContact} />
      <h2>Contacts</h2>
      <Filter handleSavingFilter={handleSavingFilter} />

      <ContactList
        contacts={contacts}
        filterText={filterText}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
