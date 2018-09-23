import React from 'react';
import { shallow } from 'enzyme';
import AddExpensePage from '../../components/AddExpensePage'

let StartAddExpense , history , wrapper;

test('should render AddExpensePage correctly', () => {
    StartAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage StartAddExpense= {StartAddExpense} history = {history}/>);
    expect(wrapper).toMatchSnapshot();
  });