const reducers = function( state, { type, data } ){
	switch ( type ) {
		case 'HIDE_BACK_BTN': {
			return ({...state, displayBackButton: false });
		}
	}

	return ( state );
};

export default reducers;
