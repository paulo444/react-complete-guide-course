import { useEffect, useState } from 'react';

import NewExpense from './Expenses/NewExpense';
import Expenses from './Expenses/Expenses';

function App() {
  const [expenses, setExpenses] = useState(
    [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
      },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
    ]);

  const [filterExpenses, setFilterExpenses] = useState([]);
  const [filter, setFilter] = useState('ALL');
  const [update, setUpdate] = useState(true)

  useEffect(() => {filterExpenseHandler(filter)}, [update]);

  const addExpenseHandler = expense => {
    setExpenses((prevState) => {
      const newExpenses = [...prevState];
      newExpenses.push(expense);
      return newExpenses;
    })
    setUpdate(prev => !prev);
  };

  const filterExpenseHandler = filterDate => {
    setFilter(filterDate);
    setFilterExpenses((prevState) => {
      const newExpenses = expenses.filter((item) => item.date.getFullYear() == filterDate);
      return newExpenses;
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {filter == 'ALL' ? <Expenses items={expenses} changeFilter={filterExpenseHandler} filter={filter}/> : 
                         <Expenses items={filterExpenses} changeFilter={filterExpenseHandler} filter={filter}/> }
    </div>
  );
}

export default App;
