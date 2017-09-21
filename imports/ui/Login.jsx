import React from 'react';
import autobind from 'react-autobind';

import {
	Card,
	CardActions,
	CardTitle,
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
	state = {
		email: "",	
		password: "",	
	};

	handleChangeEmail = ( event, email ) => {
		this.setState({ email });
	};

	handleChangePassword = ( event, password ) => {
		this.setState({ password });
	};

	handleFormSubmit = ( event ) => {
		event.stopPropagation();
		event.preventDefault();

		const { email, password } = this.state;

		Meteor.loginWithPassword( { email }, password, error => {
			if ( error ) console.log( error );
    	} );
	};

	render(){
		const { email, password } = this.state;

		return (
			<form 
				className="container aligner-flex fill-screen wow fadeIn"
				onSubmit={this.handleFormSubmit}
			>
				<Card className="full-width">
					<CardTitle
						title="Login"
					/>
					<div style={{width: '95%', margin: 'auto'}}>
						<TextField
							onChange={this.handleChangeEmail}
							floatingLabelText="Email"
							value={email}
							type="email"
							fullWidth
						/>
						<TextField
							onChange={this.handleChangePassword}
							floatingLabelText="Password"
							value={password}
							type="password"
							fullWidth
						/>
					</div>
					<CardActions className="align-right">
						<RaisedButton
							primary
							label="Login"
							type="submit"
						/>
						<FlatButton
							label="Signup"
						/>
					</CardActions>
				</Card>
			</form>
		);
	}
}

export default Login;