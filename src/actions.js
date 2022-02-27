// Actions
/* Pour éviter les bugs dûs a des fautes de frappes, 
car Redux ne produit aucune erreur si un type
n'existe pas ! */
const DECREASE = 'DECREASE';
const INCREASE = 'INCREASE';
const REMOVE = 'REMOVE';
const CLEAR_CART ='CLEAR_CART';
const GET_TOTALS = 'GET_TOTALS';

// Actions creators
/* Pour ne plus avoir à spécifier à chaque fois :
remove:() => { dispatch({ type:REMOVE, payload:{ id:id } }); }
dans les mapDispatchToProps */
const removeItem = (id) => {
	return { type:REMOVE, payload:{ id } };
};

// Export
export { DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTALS, removeItem };