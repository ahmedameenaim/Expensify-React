import { setStartDate , setEndDate , setTextFilter, sortByAmount , sortByDate } from '../../actions/filters';
import moment from 'moment';


test('it should generate startDate object action', () => {
 const action = setStartDate(moment(0));
 expect(action).toEqual({
     type: 'SET_START_DATE',
     startDate: moment(0)
 })
});

test('it should generate endDate object action', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })

});

test('it should filter text object action' , () => {
    const action = setTextFilter('greenlanter');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'greenlanter'
    })
})

test('it should filter text object action with default' , () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('it should sortby amount object action' , () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('it should sortby date object action' , () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})


