import styles from './profile.module.css';
import Stats from './Stats/Stats';
import PropTypes from 'prop-types';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          className={styles.avatar}
          src={avatar}
          width="150"
          height="150"
          alt={username}
        ></img>
        <h2 className={styles.name}>{username}</h2>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
        <Stats {...stats} />
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
