import {createStore} from 'redux';
import reducer from './reducer';

export const store = createStore(reducer);
const {dispatch} = store;

store.dispatch({type: 'INC'})