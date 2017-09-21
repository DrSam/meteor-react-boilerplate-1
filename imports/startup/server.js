import '/imports/api/methods/server-only';
import '/imports/api/methods';
import '/imports/api/collections';
import '/imports/api/publications';
import '/imports/api/search-source/server';

/*
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs } from '/imports/api/apollo/schemas';
import resolvers from '/imports/api/apollo/resolvers';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
createApolloServer({
    schema
});
*/

Meteor.startup( f => {
	if ( !Meteor.users.findOne() ) Accounts.createUser({
		email: "user@txm.com",
		password: "txm",
	});

/*
	ServiceConfiguration.configurations.upsert({
	  service: "facebook"
	}, {
	  $set: {
	    appId: "1949005768698841",
	    loginStyle: "popup",
	    secret: "3ad20d20e5e8df17519523fedb26f4b6"
	  }
	});
*/
} );