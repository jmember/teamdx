function processTag() {
  // First, get the name of the tag that we want to process from the query
  var query = window.location.search;
  // Skip the leading ?, which should always be there, but be careful anyway
  if( query.substring(0, 1) == '?') {
    query = query.substring(1);
  }

  // Get the FireBase reference for the particular tag
  var ref = new Firebase( "https://flickering-fire-9736.firebaseio.com/Tags/"
                          + query );
  // Attach an asynchronous callback to read the data at reference tag
  ref.once( 'value', function(snapshot) {

    // title of the tag
    document.getElementById( "tagTitle" ).innerHTML =
      query + " HTML tag";

    // Description of the tag
    document.getElementById( "def" ).innerHTML =
      snapshot.child( "desc" ).val();

    // Browser support checkboxes
    browserSupportSnap = snapshot.child( "browser support" );
    document.getElementById( "s_chrome" ).checked =
      browserSupportSnap.child("google chrome").val() == "yes" ?
      true : false;
    document.getElementById( "s_safari" ).checked =
      browserSupportSnap.child("internet explorer").val() == "yes" ?
      true : false;
    document.getElementById( "s_opera" ).checked =
      browserSupportSnap.child("mozilla firefox").val() == "yes" ?
      true : false;
    document.getElementById( "s_firefox" ).checked =
      browserSupportSnap.child("safari").val() == "yes" ?
      true : false;

    // Example box
    document.getElementById( "exBox" ).innerHTML =
      snapshot.child( "example" ).val();

    // Attributes
    // Get the attributes' snapshot
    var attrSnap = snapshot.child( "attributes" );
    var attrs = document.getElementById( "attrs" );
    // If there are no attributes associated with this element, hide the
    // attributes section
    if( !attrSnap.hasChildren() ) {
      attrs.setAttribute( "display", "none" );
    }
    // Otherwise (there are attributes), display the attributes section and
    // set the content of that section accordingly
    else {
      attrs.setAttribute( "display", "block" );
      // Remove all content from the attribute table
      while( attrTblBody.hasChildNodes() ) {
        attrTblBody.removeChild( attrTblBody.firstChild );
      }
      // Set the heading
      var row = document.createElement( "TR" );
      var col1 = document.createElement( "TH" );
      var col2 = document.createElement( "TH" );
      col1.appendChild( document.createTextNode( "Attribute" ) );
      col2.appendChild( document.createTextNode( "Description" ) );
      row.appendChild( col1 );
      row.appendChild( col2 );
      attrTblBody.appendChild( row );
      // Add a row and separate columns for each tag attribute
      attrSnap.forEach( function( singleAttr ) {
        row = document.createElement( "TR" );
        col1 = document.createElement( "TD" );
        col2 = document.createElement( "TD" );
        col1.appendChild( document.createTextNode( singleAttr.key() ) );
        col2.appendChild( document.createTextNode( singleAttr.child( "desc" ).val() ) );
        row.appendChild( col1 );
        row.appendChild( col2 );
        attrTblBody.appendChild( row );
      } );
    }

  }, function( errorObject ) {
  } );
}
