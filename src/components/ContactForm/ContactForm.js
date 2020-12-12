import { Component } from 'react';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) {
      alert('All fields must be filled!');
      return;
    }

    if (Number.isNaN(+number)) {
      alert('Telephone number must be numeric!');
      return;
    }

    this.props.onSubmit(name, number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            className={s.input}
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            className={s.input}
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
