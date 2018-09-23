
import { addExpense , editExpense , removeExpense } from '../../actions/expenses';
import {configureMockStore} from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense object action' , () => {
 const removeAction = removeExpense({id: '123abc'});
 expect(removeAction).toEqual({
     type: "REMOVE_EXPENSE",
     id: "123abc"
 })
})



test('should edit expense action object' , () => {
    const editAction = editExpense('123abc',{note: 'hello greenlanter' })
    expect(editAction).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates:{
            note: 'hello greenlanter'
        }
    })
})