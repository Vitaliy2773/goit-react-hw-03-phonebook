import React from 'react';
import css from './Contacts.module.css';

export default class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            className={css.input}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            className={css.input}
            required
          />
        </label>
        <button type="submit" className={css.buttonAddContact}>
          Add contact
        </button>
      </form>
    );
  }
}
