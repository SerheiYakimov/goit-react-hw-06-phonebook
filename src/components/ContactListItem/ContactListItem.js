import PropsType from "prop-types";
import s from "../ContactListItem/ContactListItem.module.css";
// import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-actions";
import { useDispatch } from "react-redux";

export function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  
  return (
    <li className={s.list}>
      <p className={s.item}>
        {name}:<span className={s.span}>{number}</span>
      </p>
      <button
        type="submit"
        onClick={() => dispatch(deleteContact(id))}
        className={s.button}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.PropsTypes = {
  id: PropsType.number.isRequired,
  name: PropsType.string.isRequired,
  number: PropsType.number.isRequired,
  onDeleteContact: PropsType.func.isRequired,
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (id) => dispatch(actions.deleteContact(id)),

//   }
// }

// export default connect (null, mapDispatchToProps)(ContactListItem);
