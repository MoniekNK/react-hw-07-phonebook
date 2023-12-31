import { useDispatch } from 'react-redux';
import { setFilterStatus } from '../../redux/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = event => {
    dispatch(setFilterStatus(event.target.value.toLowerCase()));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        name="filterName"
        className={css.input}
        type="text"
        placeholder="Search contacts..."
        onChange={onFilterChange}
      />
    </label>
  );
};
