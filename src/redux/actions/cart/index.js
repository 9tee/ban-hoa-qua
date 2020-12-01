import {CHANGE, REMOVE} from './action_types';

export default {
    change: (data) => ({
        type: CHANGE,
        data,
    }),
    remove:(data) => ({
        type :REMOVE,
        data,
    })
};