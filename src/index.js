import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './state';
import getIssues from './api';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}>
     <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

store.subscribe( () => {
    console.log('New state', store.getState());
});

console.log(1);
store.dispatch({
    type: 'INCREASE_COUNTER'
});

console.log(2);
store.dispatch({
    type: 'INCREASE_COUNTER'
});

/*
console.log(3);
store.dispatch({
    type: 'RESET_COUNTER'
});
*/

console.log(4);
store.dispatch({
    type: 'UNKNOWN'
});

console.log(5);
store.dispatch({
    type: 'LOAD_ISSUES',
    payload: [{id: 1, name: 'issue 1'}, {id: 2, name: 'issue 2'}]
});

