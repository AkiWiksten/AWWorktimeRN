import {createStore} from 'redux';
import workTimeReducer from './workTimeApp';

const store = createStore(workTimeReducer);

export default store;
