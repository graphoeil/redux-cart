// Imports
import React from 'react';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// Imports Redux
import { createStore } from 'redux';
import reducer from "./reducer";
import { Provider } from "react-redux";

// Store Redux
/* createStore prend en argument une fonction reducer
ainsi que le store (state) de départ, ici nous passons
uniquement la fonction reducer, le store initial étant
dans la fonction reducer comme paramètre par défaut.
Le 2nd paramètre ici est pour react-devtools */
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Fonction
function App(){

	// Return
	/* Nous injectons le Provider ici car il s'agit 
	d'une application simple où tous les éléments sont 
	connecté au fichier App.js, idéalement pour une 
	application plus conséquente nous injectons
	le Provider dans index.js */
	return(
		<Provider store={ store }>
			{/* Obtenir le state depuis le store 
			avec store.getState() */}
			<Navbar/>
     		<CartContainer/>
		</Provider>
	);

};

// Export
export default App;