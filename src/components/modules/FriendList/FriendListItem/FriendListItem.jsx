import styles from './friend-list-item.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? 'Online' : 'Offline';
  const statusClasses = isOnline
    ? `${styles.status} ${styles.online}`
    : `${styles.status} ${styles.offline}`;
  return (
    <li className={styles.item}>
      <span className={statusClasses}>{status}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
