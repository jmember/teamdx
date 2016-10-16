function mainPageDataGen() {
  // Get the FireBase reference for tags list
  var ref = new Firebase( "https://flickering-fire-9736.firebaseio.com/Tags" );
  var i = 0, j = 0;
  var row;
  var col1, col2, col3;
  var link;
  // Attach an asynchronous callback to read the tags
  ref.limitToFirst(30).once( 'value', function(snapshot) {
    // get the tbody of the tags table
    // loop to print 6 rows of 5 col1umns for tags
    var tagsTblBody = document.getElementById( "tagTblBody" );
    row = document.createElement( "TR" );
    snapshot.forEach( function( singleTag ) {
      // get the current tag name
      link = document.createElement( "A" );
      link.setAttribute( "href", "tag.html?" + singleTag.key() );
      link.appendChild( document.createTextNode( singleTag.key() ) );
      col1 = document.createElement( "TD" );
      col1.appendChild( link );
      row.appendChild( col1 );
      // if full after this add, append row to the table and get a new row
      if( ++j >= 5 ) {
        tagsTblBody.appendChild( row );
        row = document.createElement( "TR" );
        j = 0;
      }
    } );
  } );
  // Global Attributes
  var ref = new Firebase( "https://flickering-fire-9736.firebaseio.com/Global_Attributes" );
  ref.limitToFirst(10).once( 'value', function(snapshot) {
    var attrsTblBody = document.getElementById( "attrsTbody" );
    row = document.createElement( "TR" );
    snapshot.forEach( function( singleAttr ) {
      // get the current attr name
      col1 = document.createElement( "TD" );
      col1.appendChild( document.createTextNode( singleAttr.key() ) );
      row.appendChild( col1 );
      // if full after this add, append row to the table and get a new row
      if( ++j >= 5 ) {
        attrsTblBody.appendChild( row );
        row = document.createElement( "TR" );
        j = 0;
      }
    } );
  } );
  var ref = new Firebase( "https://flickering-fire-9736.firebaseio.com/Color" );
  // Attach an asynchronous callback to read the tags
  ref.limitToFirst(8).once( 'value', function(snapshot) {
    var colorTbody = document.getElementById( "colorTbody" );
    snapshot.forEach( function( singlecolor ) {
      row = document.createElement( "TR" );
      // get the color
      col1 = document.createElement( "TD" );
      col1.appendChild( document.createTextNode( singlecolor.key() ) );
      col2 = document.createElement( "TD" );
      col2.appendChild( document.createTextNode( singlecolor.child( "hex" ).val() ) );
      col3 = document.createElement( "TD" );
      col3.setAttribute( "bgcolor", singlecolor.child( "hex" ).val() );
      col3.appendChild( document.createTextNode("") );
      row.appendChild( col1 );
      row.appendChild( col2 );
      row.appendChild( col3 );
      colorTbody.appendChild( row );
    } );
  } );


}
