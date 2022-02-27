// Imports
import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from './actions';
import cartItems from "./cart-items";

// Initial store
const initialStore = {
	cart:cartItems,
	total:0,
	amount:0
};

// Reducer
/* Le reducer prends 2 arguments, state et action,
il retourne OBLIGATOIREMENT un state !!!!! */
/* reducer est une fonction ! nous pouvons donc lui passer
le state initial comme valeur par défaut, très pratique
dans le cas de store et reducer multiples. */
function reducer(state = initialStore, action){

	// Clear cart
	if (action.type === CLEAR_CART){
		return { ...state, cart:[] };
	}

	// Decrease amount
	if (action.type === DECREASE){
		const { id, amount } = action.payload;
		var tempCart;
		if (amount === 1){
			// Remove from cart, car = 0 ,-)
			tempCart = state.cart.filter((item) => {
				return item.id !== id;
			});
		} else {
			tempCart = state.cart.map((item) => {
				if (item.id === id){
					item = { ...item, amount:item.amount - 1 };
				}
				return item;
			});
		}
		return { ...state, cart:tempCart };
	}

	// Increase amount
	if (action.type === INCREASE){
		const tempCart = state.cart.map((item) => {
			if (item.id === action.payload.id){
				return { ...item, amount:item.amount + 1 };
			}
			return item;
		});
		return { ...state, cart:tempCart };
	}

	// Remove item
	if (action.type === REMOVE){
		const tempCart = state.cart.filter((item) => {
			return item.id !== action.payload.id;
		});
		return { ...state, cart:tempCart };
	}

	// Totaux
	if (action.type === GET_TOTALS){
		let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
			const { price, amount } = cartItem;
			cartTotal.amount += amount;
			cartTotal.total += price * amount;
			return cartTotal;
		},{ total:0, amount:0 });
		total = parseFloat(total.toFixed(2));
		return { ...state, total, amount };
	}

	// Default
	return state;

};

// Export
export default reducer;