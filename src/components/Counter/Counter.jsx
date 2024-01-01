import { useSelector } from 'react-redux';
import { selectContactsCount } from '../../redux/contactsSlice';

export const Counter = () => {
  const count = useSelector(selectContactsCount);

  return (
    <div>
      <h3>Number of contacts: {count}</h3>
    </div>
  );
};
