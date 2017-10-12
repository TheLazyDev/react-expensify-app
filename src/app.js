import React from 'react';
import ReactDOM from 'react-dom'; // React and ReactDOM imports
import {Provider} from 'react-redux';
// Store Generator import 
import configureStore from './store/configureStore';

// Expenses and Filters action Generators 
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

// getVisibleExpenses Import

import getVisibleExpenses from './selectors/expenses';

// Router import
import AppRouter from './routers/AppRouter';

// Scss file
import "normalize.css/normalize.css";
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


// Generate store;

const store = configureStore();

store.dispatch(addExpense({description: "Water bill", amount:4500}));

store.dispatch(addExpense({description: "Gas bill", createdAt:1000}));
store.dispatch(addExpense({description: "Rent", amount: 45000}));


const state = store.getState();

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
// console.log(store.getState());


const jsx = (
    <Provider store={store}>
       <AppRouter />
    </Provider>
    
)

// Render IndecisionApp
ReactDOM.render(jsx,document.getElementById('app'));



