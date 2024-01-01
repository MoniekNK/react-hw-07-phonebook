import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/actions';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contacts}>
      <p>Znajdź kontakt po nazwie</p>
      <ul className={css.contactsList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.contactsItem} key={id}>
            <p className={css.contactsName}>{name}</p>
            <p className={css.contactsNumber}>{number}</p>
            <button
              onClick={() => {
                handleDeleteContact(id);
              }}
              className={css.contactsBtn}
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
