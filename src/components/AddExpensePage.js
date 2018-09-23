import React , {Component} from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {StartAddExpense} from '../actions/expenses';

export class AddExpensePage extends Component {
    onSumbit = (expense) => {
        this.props.StartAddExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return(
        <div> 
           <h1>Add Expense</h1>
           <ExpenseForm 
           onSumbit = {this.onSumbit} />
        </div>
);
}
}


const mapDispatchToProps = (dispatch) => ({StartAddExpense: (expense) => dispatch(StartAddExpense(expense))});


export default connect(undefined,mapDispatchToProps )(AddExpensePage);