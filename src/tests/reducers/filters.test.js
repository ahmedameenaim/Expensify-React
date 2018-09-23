import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import filters from '../../reducers/filters';

test('it should setup default filters value' , () => {
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('it should sortBy by amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
})

test('it should sortBy by date', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('it should start text filter', () => {
    const text = 'hello'
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
    expect(state.text).toEqual('hello');
})

test('it should set startDate', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, {type: 'SET_START_DATE' , startDate})
    expect(state.startDate).toEqual(startDate)
})

test('it should set endDate', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, {type: 'SET_END_DATE' , endDate})
    expect(state.endDate).toEqual(endDate)
})

