import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createContainer } from 'react-meteor-data';
import { createMuiTheme, getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { purple, green } from 'material-ui/colors';

import '/imports/api/methods';

//import ApolloClient from 'apollo-client';
//import { meteorClientConfig } from 'meteor/apollo';
//const client = new ApolloClient( meteorClientConfig() );

import App from '/imports/ui/App';
import { store } from '/imports/redux';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/*
import {
  brown700, brown500,
  cyan500,
  pinkA200,
  tealA700,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const customMuiTheme = getMuiTheme({
	palette: {
    primary1Color: brown700, // Topbar color and icons of actio bar when you click on it
    primary2Color: brown700, // Sert à rien pour l'instant
    primary3Color: brown700, // Sert à rien pour l'instant
    accent1Color: cyan500, // Sert à rien pour l'instant
    accent2Color: cyan500, // Sert à rien pour l'instant
    accent3Color: cyan500, // Sert à rien pour l'instant
    textColor: fullBlack, // Color of the text (actionbar's icons, search bar,...)
    secondaryTextColor: fade(tealA700, 0.54), // Sert à rien pour l'instant
    alternateTextColor: white, // Chage the title color, the text on the appbar but not the one when you click on search
    canvasColor: white, // color of the action bar
    borderColor: white, // color of the small line under SEARCH
    disabledColor: fade(white, 1), // color of the text SEARCH by default
    pickerHeaderColor: tealA700, // Sert à rien pour l'instant
    clockCircleColor: fade(tealA700, 0.7), // Sert à rien pour l'instant
    shadowColor: tealA700, // Sert à rien pour l'instant
  }
});
*/

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
});

const AuthWrapper = createContainer( appProps => {
	const userId = Meteor.userId();

	return ({ userId });
}, ({ userId, loggingIn }) => (
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
      <BrowserRouter>
        <App userId={userId} loggingIn={loggingIn} />
      </BrowserRouter>  
    </Provider>
	</MuiThemeProvider>
) );

window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();

window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)}; //fall back

Meteor.startup( f => {
	new WOW().init();
	//global.subsCache = new SubsCache( 5, 10 );

	render(
		<AuthWrapper />	
	 	, document.getElementById('render-target')
	);
} );
