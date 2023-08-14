import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../Card';
import ExpenseFilter from './ExpensesFilter'

import styles from '../../styles/Expenses/expenses.module.css';

const Expenses = (props) => {
  return (
    <Card className={styles.expenses}>
      <ExpenseFilter changeFilter={props.changeFilter} filter={props.filter}/>
      {props.items.map((item) => {
        return (<ExpenseItem 
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />);
      })}
    </Card>
  );
}

export default Expenses;