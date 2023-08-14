import React from 'react';

import ExpenseForm from './ExpenseForm';
import styles from '../../styles/Expenses/newExpense.module.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 'e' + Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={styles.new_expense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;