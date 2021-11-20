import PropsType from "prop-types";
import s from "../ContactList/ContactList.module.css";
import { ContactListItem } from "../ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { getAllContacts } from "../../redux/phonebook/phonebook-selectors";

export function ContactList() {
  const contacts = useSelector(getAllContacts);
 
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
          />
        )
      )}
    </ul>
  );
}

ContactList.PropsType = {
  id: PropsType.number.isRequired,
  name: PropsType.string.isRequired,
  number: PropsType.number.isRequired,
};


