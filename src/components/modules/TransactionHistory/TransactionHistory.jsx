import styles from './transaction-history.module.css';
import TransactionHistoryRow from './TransactionHistoryRow/TransactionHistoryRow';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions = [] }) => {
  const rows = transactions.map(({ id, ...row }) => {
    return <TransactionHistoryRow key={id} {...row} />;
  });

  return (
    <table className={styles['table']}>
      <thead className={styles['table-head']}>
        <tr className={styles['table-row']}>
          <th className={styles['table-title']}>Type</th>
          <th className={styles['table-title']}>Amount</th>
          <th className={styles['table-title']}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles['table-body']}>{rows}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
