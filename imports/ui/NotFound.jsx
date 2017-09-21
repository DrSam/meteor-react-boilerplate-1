import React from 'react';
import autobind from 'react-autobind';

class NotFound extends React.Component {
	constructor( props ){
		super( props );
		autobind( this );
		this.state = {};
	}

	render(){
		const { prop } = this.props;
		const { state } = this.state;

		return (
			<h1>
				404 - Not Found
			</h1>
		);
	}
}

export default NotFound;