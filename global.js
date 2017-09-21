global.secure = collection => {
  const yes = {
    insert  : f => true,
    update  : f => true,
    remove  : f => true,
  };
  const no = {
    insert  : f => false,
    update  : f => false,
    remove  : f => false,
  };

  collection.allow( Meteor.isDevelopment ? yes : no );
  collection.deny( Meteor.isDevelopment ? no : yes );

  return ( collection );
};

global.log = arg => ( console.log( arg ), arg );

if ( Meteor.isClient ){
  global.GEBID = document.getElementById;
}

if ( Meteor.isServer ){
  global.unblock = ctx => ctx && ctx.unblock && ctx.unblock();
}

Meteor._user = Meteor.user;
Meteor.user = ( arg1, arg2 ) => {
  let uid;
  let fields = [];
  let projection = {};

  if ( arg1 ) {
    if ( typeof arg1 === "string" ) {
      uid = arg1;

      if ( arg2 && Array.isArray( arg2 ) ) {
        fields = arg2;
      }
    } else if ( Array.isArray( arg1 ) ) {
      uid = Meteor.userId()
      fields = arg1;
    }

    if ( fields && fields.length ) {
      projection.fields = {};
      fields.forEach( str => ( projection.fields[ str ] = true ) );
    }

    return Meteor.users.findOne( uid, projection );
  }
  return ( Meteor._user() );
};

global.formatTextForReact = (ta="") => ta.split('\n').map( (t,i) => <span key={i}>{t}<br/></span>);
