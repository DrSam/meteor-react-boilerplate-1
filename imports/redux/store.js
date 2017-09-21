import Redux from 'redux';
import reducers from './reducers';

const store = Redux.createStore( reducers, {
	navTitle: {
		present: "Whatson",
		past: ['Whatson'],
		future: [],
	},
	toastOpened: false,
	toastMsg: "",
	lastNavTitle: "Whatson",
	searchIsOpened: false,
	displayBackButton: false,
} );

export default store;