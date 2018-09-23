import React from 'react';
import {connect} from 'react-redux';
import ExpensListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List </h1>
        {props.expenses.length === 0 ? (<div><span>No expenses</span></div>) : (
            props.expenses.map((expense) => {
            return <ExpensListItem key = {expense.id} {...expense} />
        })
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };

export default connect(mapStateToProps)(ExpenseList)

