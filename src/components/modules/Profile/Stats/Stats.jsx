import styles from './stats.module.css';
import PropTypes from 'prop-types';

const Stats = ({ followers = 0, views = 0, likes = 0 }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.elem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.elem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.elem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

export default Stats;

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
