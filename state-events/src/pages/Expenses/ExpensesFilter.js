import React from 'react';

import styles from '../../styles/Expenses/expensesFilter.module.css';

const ExpensesFilter = (props) => {
  return (
    <div className={styles.expenses_filter}>
      <div className={styles.expenses_filter_control}>
        <label>Filter by year</label>
        <select onChange={(event) => {props.changeFilter(event.target.value)}} value={props.filter}>
          <option value='ALL'>ALL</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;