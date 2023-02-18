import styles from './list-item.module.css';
import PropTypes from 'prop-types';

const ListItem = ({ label = '', percentage = 0 }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
