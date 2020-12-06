import {CHANGE, REMOVE, ADD_CART} from './action_types';

export default {
    change: (data) => ({
        type: CHANGE,
        data,
    }),
    remove:(data) => ({
        type :REMOVE,
        data,
    }),
    addCart: (data) => ({
        type: ADD_CART,
        data,
    })
};