import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisesMidle from './middlewares/promises';

//import counterReducer from './reducers/counter';
//import issuesReducer from  './reducers/issues';
import * as reducers from './reducers';
import logger from 'redux-logger';

console.log(reducers);
/*
state: {
    issues: [],
    repo: '',
    counter: 0
}

Action: {
    type: 'increase counter',
    payload: {}
}
 */
/*
function reducer(state, action) {
    return {
        issues: issuesReducer(state.issues, action),
        repo: state.repo,
        counter: counterReducer(state.counter, action)
    };
}
*/

let reducer = combineReducers(reducers);

let createStoreWithMiddle = applyMiddleware(
    promisesMidle,
    logger
)(createStore);

const store = createStoreWithMiddle(reducer, {
    issues: [],
    repo: '',
    counter: 0
});

export default  store;