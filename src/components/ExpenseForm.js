import React  from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';





export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '' ,
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderfocused: false,
            error: ''
        };
    
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
        
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
          this.setState(() => ({amount}));
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}))
          }
    }

    onFocusedChange = ({focused}) => {
     this.setState(() => ({calenderfocused: focused}))
    }

    onSumbit = (e) => {
      e.preventDefault();
      
      if(!this.state.description || !this.state.amount) {
          this.setState(() => ({error: 'please provide description and amount'}))
      }else {
          this.setState(() => ({error: ''}))
          this.props.onSubmit({
              description: this.state.description,
              amount: parseFloat(this.state.amount,10) * 100,
              date: this.state.date.valueOf(),
              note:this.state.note
          });
      }

    }

    render() {
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.onSumbit}>
                <input type = 'text' placeholder = 'description'  autoFocus value = {this.state.description} onChange = {this.onDescriptionChange}/>
                <input type = 'text' placeholder = 'amount'  value = {this.state.amount} onChange = {this.onAmountChange}/>
                <SingleDatePicker 
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calenderfocused}
                    onFocusedChange = {this.onFocusedChange}
                    numberOfMonths = {1}
                    isOutOfSideRange = {() => false}
                />
                <textarea placeholder = 'add a note for your expense (optional)'
                value = {this.state.note}
                onChange = {this.onNoteChange}
                > </textarea>
                <button>Add Expense</button>
            </form>
            </div>
        );
    }
}
