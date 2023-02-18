import styles from './statistics.module.css';
import ListItem from './ListItem/ListItem';
import PropTypes from 'prop-types';

const Statistics = ({ title, objects }) => {
  const items = objects.map(({ id, ...props }) => {
    return <ListItem key={id} {...props} />;
  });

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles['stat-list']}>{items}</ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  objects: PropTypes.arrayOf(PropTypes.shape),
};
