import {combineReducers} from 'redux';
import login from './login';
import cart from './cart';

const allReducers = combineReducers({
    login,
    cart,
});

export default allReducers;