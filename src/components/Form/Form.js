import { useState } from "react";
import PropsType from "prop-types";
import { v4 as uuid } from "uuid";
import s from "../Form/Form.module.css";
// import { connect } from "react-redux";
import { addNewContact } from '../../redux/phonebook/phonebook-actions';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";

export default function Form() {
  const [name, SetName] = useState('');
  const [number, SetNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();


  const idName = uuid();
  const idNumber = uuid();
    
  const handleChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
          case 'name':
              SetName(value);
              break;
          case 'number':
              SetNumber(value);
              break;
          default:
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name,
      number,
      id: uuid(),
      };
    
    if (contacts.find((el) => el.name === contact.name)) {
        alert(`${contact.name} is already in contacts`);
      } else {
        dispatch(addNewContact(contact));
      };

    resetForm();
  }

  const resetForm = () => {
      SetName('');
      SetNumber('');
  }

    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={idName}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            id={idName}
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label} htmlFor={idNumber}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            id={idNumber}
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
}

Form.PropType = {
  onSubmit: PropsType.func.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   addNewContact: (contact) => dispatch(addNewContact(contact)),
// })

// export default connect(null, mapDispatchToProps)(Form);