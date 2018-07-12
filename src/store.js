import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
/* eslint-disable import/no-extraneous-dependencies */
import { createLogger } from 'redux-logger';
/* eslint-disable import/no-extraneous-dependencies */

import http from './modules/core/http';
import { searchPageReducer } from './modules/searchPage';

export const thunkMiddleware = thunk.withExtraArgument(http);


const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(
            thunkMiddleware
        );
    }
    return applyMiddleware(
        thunkMiddleware,
        createLogger()
    );
};

const rootReducer = combineReducers({
    search: searchPageReducer
})
export default createStore(
    rootReducer,
    getMiddleware()
);
