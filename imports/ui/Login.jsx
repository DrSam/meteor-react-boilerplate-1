import React from 'react';
import autobind from 'react-autobind';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import {Button, TextField} from 'material-ui';
import {FormControl} from 'material-ui/Form';

class Login extends React.Component {
	state = {
		email: "",	
		password: "",	
	};

	handleChangeEmail = ( event ) => {
		this.setState({ email: event.target.value });
	};

	handleChangePassword = ( event ) => {
		this.setState({ password: event.target.value });
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
					<CardContent>
					<div>
						<h2>Login</h2>
						<FormControl fullWidth>
						<TextField
							onChange={this.handleChangeEmail}
							label="Email"
							value={email}

						/>
						<TextField
							onChange={this.handleChangePassword}
							label="Password"
							value={password}
							type="password"
						/>
						</FormControl>
					</div>
					</CardContent>
					<CardActions className="align-right">
						<Button raised color="primary" type="submit">Login</Button>
						<Button raised>
							Signup
						</Button>
					</CardActions>
				</Card>
			</form>
		);
	}
}

export default Login;