import { CHANGE,REMOVE} from '../actions/cart/action_types';

export default (state = {
    cart: [{tenmon:'1', soluong:1,dongia:10},{tenmon:'2', soluong:1,dongia:10}],
}, action) => {
    switch (action.type) {
        case CHANGE:{
            var temp = [...state.cart];
            temp[action.data.index].soluong = action.data.quantity;
            return {
                ...state,
                cart: temp,
            };
        };
        case REMOVE:{
            var temp = [...state.cart];
            temp.splice(action.data,1);
            return {
                ...state,
                cart: temp,
            };
        };
        default:
            return {
                ...state,
            };
    }
};