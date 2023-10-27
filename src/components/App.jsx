import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Contacts/ContactForm';
import Filter from './Contacts/Filter';
import ContactList from './Contacts/ContactList';
import css from '../components/Contacts/Contacts.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleSubmit = (contactName, contactNumber) => {
    const { contacts } = this.state;

    const presentContact = contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (presentContact) {
      alert(`${contactName} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  inputId = nanoid();

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2 className={css.title}>Contacts</h2>
        <Filter onChange={this.changeFilter} value={filter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteItem={this.handleDeleteContact}
        />
      </div>
    );
  }
}
