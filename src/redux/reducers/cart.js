import { CHANGE,REMOVE,ADD_CART} from '../actions/cart/action_types';

function saveCart(cart){
    window.localStorage.setItem('cart',JSON.stringify([...cart]));
}

export default (state = {
    cart: [],
}, action) => {
    switch (action.type) {
        case '@@INIT':{
            let temp = window.localStorage.getItem('cart');
            console.log(JSON.parse(temp));
            if(!!!temp){
                return {
                    ...state,
                    cart:[]
                }
            }else{
                return {
                    ...state,
                    cart: JSON.parse(temp)
                }
            }
        }
        case CHANGE:{
            var temp = [...state.cart];
            temp[action.data.index].soluong = action.data.quantity;
            saveCart(temp);
            return {
                ...state,
                cart: temp,
            };
        };
        case REMOVE:{
            var temp = [...state.cart];
            temp.splice(action.data,1);
            saveCart(temp);
            return {
                ...state,
                cart: temp,
            };
        };
        case ADD_CART:{
            let temp = [...state.cart];
            let index = temp.findIndex(item => item.mamon === action.data.mamon)
            console.log(index)
            if(!!index){
                temp.push(action.data);
            }
            else{
                temp[index] = action.data;
            }
            saveCart(temp);
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