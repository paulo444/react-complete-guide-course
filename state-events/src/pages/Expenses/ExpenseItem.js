import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../Card';
import styles from '../../styles/Expenses/expenseItem.module.css';

const ExpenseItem = (props) => {
  return (
    <Card className={styles.expense_item}>
      <ExpenseDate date={props.date} />
      <div className={styles.expense_item_description}>
        <h2>{props.title}</h2>
        <div className={styles.expense_item_price}>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;