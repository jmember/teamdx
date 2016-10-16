function tagListGenerator() {
  // Get the FireBase reference for the tag list
  var ref = new Firebase( "https://flickering-fire-9736.firebaseio.com/Tags" );
  // Attach an asynchronous callback to read the tags
  ref.once( 'value', function(snapshot) {
    var tblBody = document.getElementById( "tblBody" );
    var row = document.createElement( "TR" );
    var col1 = document.createElement( "TH" );
    var col2 = document.createElement( "TH" );
    col1.appendChild( document.createTextNode( "Name" ) );
    col2.appendChild( document.createTextNode( "Description" ) );
    row.appendChild( col1 );
    row.appendChild( col2 );
    tblBody.appendChild( row );
    snapshot.forEach( function( singleTag ) {
      row = document.createElement( "TR" );
      col1 = document.createElement( "TD" );
      col2 = document.createElement( "TD" );
      var link = document.createElement( "A" );
      link.setAttribute( "href", "tag.html?" + singleTag.key() );
      link.appendChild( document.createTextNode( singleTag.key() ) );
      col1.appendChild( link );
      col2.appendChild( document.createTextNode( singleTag.child( "desc" ).val() ) );
      row.appendChild( col1 );
      row.appendChild( col2 );
      tblBody.appendChild( row );
    } );
  } );
}
