import styles from './statistics.module.css';
import ListItem from './ListItem/ListItem';
import PropTypes from 'prop-types';

const Statistics = ({ title, statistics }) => {
  const items = statistics.map(({ id, ...props }) => {
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
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
