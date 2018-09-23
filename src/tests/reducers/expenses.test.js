import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'


test('should setup default values', () => {
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([])
})

test('should  remove expense by id' , () => {
    const action = {type: 'REMOVE_EXPENSE' , id:expenses[1].id}
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should setup unremove expense without id ', () => {
    const action = {type: 'REMOVE_EXPENSE' , id:'asd'}
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
})

test('should setup add expense', () => {
    const expense = {
        id: '109',
        description: 'greenlanter',
        note: 'DC',
        amount: 500,
        createdAt: 1000
    };
    const action = {type: 'ADD_EXPENSE' , expense}
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses, expense])
})

test('should setup edit expense', () => {
  
    const description = 'wonderWoman'
    const action = {type: 'EDIT_EXPENSE', 
    id:expenses[1].id,
    updates: {
        description
    }
}
    const state = expensesReducer(expenses,action)
    expect(state[1].description).toBe(description)
})

test('should setup not edit expense if there is not id found', () => {
    const description = 'wonderWoman'
    const action = {type: 'EDIT_EXPENSE', 
    id:'5',
    updates: {
        description
    }
};
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})