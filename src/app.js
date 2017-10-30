import React from 'react';
import ReactDOM from 'react-dom'; // React and ReactDOM imports
import {Provider} from 'react-redux';
// Store Generator import 
import configureStore from './store/configureStore';

// Expenses and Filters action Generators 
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';

// getVisibleExpenses Import

import getVisibleExpenses from './selectors/expenses';

// Router import
import AppRouter from './routers/AppRouter';

// Scss file
import "normalize.css/normalize.css";
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';
// import './playground/promises';

// Generate store;

const store = configureStore();

const jsx = (
    <Provider store={store}>
       <AppRouter />
    </Provider>
    
)
ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
// Render Expensify App
ReactDOM.render(jsx,document.getElementById('app'));
})




