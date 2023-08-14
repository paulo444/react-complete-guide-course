import React from 'react';

import styles from '../../styles/Expenses/expenseDate.module.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={styles.expense_date}>
      <div className={styles.expense_date_month}>{month}</div>
      <div className={styles.expense_date_year}>{year}</div>
      <div className={styles.expense_day}>{day}</div>
    </div>
  );
};

export default ExpenseDate;