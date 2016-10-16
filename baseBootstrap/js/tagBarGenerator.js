function generateTagBar() {
  // Get the FireBase reference for the tag list
  var ref = new Firebase( "https://flickering-fire-9736.firebaseio.com/Tags" );
  // Attach an asynchronous callback to read the tags
  ref.once( 'value', function(snapshot) {
    var lbody = document.getElementById( "tagsList" );
    var el;
    var link;
    snapshot.forEach( function( singleTag ) {
      el = document.createElement( "LI" );
      link = document.createElement( "A")
      link.setAttribute( "href", "tag.html?" + singleTag.key() );
      link.appendChild( document.createTextNode( singleTag.key() ) );
      el.appendChild( link );
      lbody.appendChild( el );
    } );
  } );
}
