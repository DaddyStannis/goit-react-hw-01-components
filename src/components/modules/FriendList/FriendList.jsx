import FriendListItem from './FriendListItem/FriendListItem';
import styles from './friend-list.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const items = friends.map(({ id, ...friend }) => {
    return <FriendListItem key={id} {...friend} />;
  });
  return <ul className={styles['friend-list']}>{items}</ul>;
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
