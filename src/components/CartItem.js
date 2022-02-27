// Imports
import React from 'react';
import { connect } from "react-redux";
import { INCREASE, DECREASE, removeItem } from '../actions';

// Fonction
const CartItem = ({ img, title, price, amount, remove, increase, decrease }) => {

	// Return
	return(
		<div className="cart-item">
			<img src={ img } alt={ title } />
			<div>
				<h4>{ title }</h4>
				<h4 className="item-price">${ price }</h4>
				{/* remove button */}
				<button className="remove-btn" onClick={ () => { remove(); } }>
					Remove
				</button>
			</div>
			<div>
				{/* increase amount */}
				<button className="amount-btn" onClick={ () => { increase(); } }>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
					</svg>
				</button>
				{/* amount */}
				<p className="amount">{ amount }</p>
				{/* decrease amount */}
				<button className="amount-btn" onClick={ () => { decrease(); } }>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

// mapDispatchToProps
/* Car ici nous passons des props depuis le parent, 
nous ne pouvons pas récupérer dispatch depuis mapStateToProps, 
cependant avec mapDispatchToProps, nous passons la suite des
props parent les action du mapDispatchToProps ,-)
Le second paramètre ownProps contient toutes les props du composant,
nous récupérons ici l'id depuis ce paramètre. */
const mapDispatchToProps = (dispatch, ownProps) => {
	const { id, amount } = ownProps;
	/* Nous retournons les actions et le dispatch associé */
	return {
		/* Nous passons au dispatch de remove l'action creator 
		removeItem() que nous avons ajouté dans actions.js, 
		cela est pratique si nous devons dispatcher plusieurs
		fois une même action. */
		remove:() => { dispatch(removeItem(id)); },
		increase:() => { dispatch({ type:INCREASE, payload:{ id } }); },
		decrease:() => { dispatch({ type:DECREASE, payload:{ id, amount } }); }
	};
};

// Export
export default connect(null, mapDispatchToProps)(CartItem);