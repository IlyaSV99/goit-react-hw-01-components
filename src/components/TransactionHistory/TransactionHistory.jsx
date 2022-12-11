import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const transactionsList = items.map(transaction => (
    <tr key={transaction.id}>
      <th className={css.type}>{transaction.type}</th>
      <th className={css.amount}>{transaction.amount}</th>
      <th className={css.currency}>{transaction.currency}</th>
    </tr>
  ));

  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.header}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionsList}</tbody>
    </table>
  );
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ),
  };
  
  export default TransactionHistory;