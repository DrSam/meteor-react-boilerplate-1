/*
import { buildRegExp, find } from '/imports/lib';
import Events from '/imports/api/collections/events';
import Partners from '/imports/api/collections/partners';

SearchSource.defineSource( 'the-search', function( searchText, options ){
  check( searchText, String );

  const projection = { sort: { _id: -1 }, limit: 10 };


  if ( !searchText ) return ([]);

  const regExp = buildRegExp( searchText );
  const selector = {
    $or: [
      { name: regExp },
      { address: regExp },
      { categoryName: regExp },
      { description: regExp },
    ]
  };

  const partnersCursor = find( Partners, selector, projection );
  const eventsCursor = find( Events, selector, projection );
  const res = {
    data: [
      {
        _id: "partners",
        type: "partners",
        data: partnersCursor.fetch(),
      },

      {
        _id: "events",
        type: "events",
        data: eventsCursor.fetch(),
      },
    ],

    metadata: {
      'partners': {
        nbResult: partnersCursor.count()
      },

      'events': {
        nbResult: eventsCursor.count(),
      },
    }
  };

  return ( res );
} );
*/