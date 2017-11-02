import React from 'react';
import ReactDOM from 'react-dom'; // React and ReactDOM imports
import {Provider} from 'react-redux';
// Store Generator import 
import configureStore from './store/configureStore';

// Expenses and Filters action Generators 
import {startSetExpenses} from './actions/expenses';
import {login,logout} from './actions/auth';

// getVisibleExpenses Import

import getVisibleExpenses from './selectors/expenses';

// Router import
import AppRouter,{history} from './routers/AppRouter';

// Scss file
import "normalize.css/normalize.css";
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import {firebase} from './firebase/firebase';

import LoadingPage from './components/LoadingPage';

// import './playground/promises';

// Generate store;

const store = configureStore();

const jsx = (
    <Provider store={store}>
       <AppRouter />
    </Provider>
    
)

let hasRendered = false;

const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />,document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
 if(user){
   store.dispatch(login(user.uid));
 
    store.dispatch(startSetExpenses()).then(()=>{
    // Render Expensify App
    renderApp()
    if(history.location.pathname === '/'){
        history.push('/dashboard')
    }

    })

 } else {
     store.dispatch(logout());
    renderApp();
  history.push('/')
 }
})


