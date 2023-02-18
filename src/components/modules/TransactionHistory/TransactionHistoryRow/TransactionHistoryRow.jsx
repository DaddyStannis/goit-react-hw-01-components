import styles from './transaction-history-row.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryRow = ({ type, amount, currency }) => {
  return (
    <tr className={styles['table-row']}>
      <td className={styles['table-field']}>{type}</td>
      <td className={styles['table-field']}>{amount}</td>
      <td className={styles['table-field']}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryRow;

TransactionHistoryRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
