import { createStore, combineReducers, applyMiddleware } from "redux";

//API
import logger from "redux-logger";

//state
import { infoReducer } from './infoReducer';

const rootReducer = combineReducers({
    info: infoReducer
})

export const store = createStore(rootReducer, applyMiddleware(logger));