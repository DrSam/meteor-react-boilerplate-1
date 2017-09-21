import React from 'react';
import autobind from 'react-autobind';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from '/imports/ui/NotFound';
import Login from '/imports/ui/Login';
import Home from '/imports/ui/Home';

const NotAuthen = ({ userId, component, ...rest }) => {
	const _CompToRender = props => {
	  if ( !userId ) return ( React.createElement( component, {...props} ) );
	  else return ( <Redirect to="/" /> );
	};

	return ( <Route render={_CompToRender} {...rest} /> );
};

const Authenticated = ({ userId, component, ...rest }) => {
	const _CompToRender = props => {
	  if ( userId ) return ( React.createElement( component, {...props, userId } ) );
	  else return ( <Redirect to="/login" /> );
	};

	return ( <Route render={_CompToRender} {...rest} /> );
};

const App = ({ userId }) => {
	return (
		<main className="fill-screen">
			<Switch>
				{/*Top Bar*/}
			</Switch>

			<Switch>
				<Authenticated component={Home} exact path="/" userId={userId} />
				<NotAuthen component={Login} exact path="/login" userId={userId} />
				<Route component={NotFound} />	
			</Switch>

			<Switch>
				{/*Bottom Bar*/}
			</Switch>
		</main>
	);
};

export default App;
