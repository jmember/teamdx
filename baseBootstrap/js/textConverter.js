function render() {
  var el = document.getElementById( "rendered" ).innerHTML =
    document.getElementById( "boxContent" ).innerHTML;
  var n = document.createTextNode(' ');
  var disp = el.style.display;
  el.appendChild( n );
  el.style.display='none';
  setTimeout(function(){
    element.style.display = disp;
    n.parentNode.removeChild(n);
  },20); // you can play with this timeout to make it as short as possible
}
function clear() {
  document.getElementById( "boxContent" ).value = "";
}
var editboxHTML =
'<html class="expand close">' +
'<head>' +
'<style type="text/css">' +
'.expand { width: 100%; height: 100%; }' +
'.close { border: none; margin: 0px; padding: 0px; }' +
'html,body { overflow: hidden; }' +
'<\/style>' +
'<\/head>' +
'<body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();">' +
'<form class="expand close" name="f">' +
'<textarea class="expand close" style="background: #def;" name="ta" wrap="hard" spellcheck="false">' +
'<\/textarea>' +
'<\/form>' +
'<\/body>' +
'<\/html>';
