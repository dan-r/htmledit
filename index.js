function iframewrite(text) {
var ifrm = document.getElementById('preview');
ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
ifrm.document.open();
ifrm.document.write(text);
ifrm.document.close();
}

function preview() {
iframewrite(document.getElementById('code').value);
try { encoded = btoa(document.getElementById('code').value) } catch(err) {  }
document.getElementById("download").setAttribute("href", 'data:text/plain;base64,'+encoded);
if(typeof(Storage)!=="undefined") { 
localStorage.code=document.getElementById('code').value;
}
}

function reload() {
if(typeof(Storage)!=="undefined") {
if (localStorage.code != "") {
if (typeof localStorage.code === "undefined") { } else {
document.getElementById('code').value=localStorage.code;
preview();
}
}
}
}

function fullscreen() {
var w = window.open('', '_blank');
w.document.write(document.getElementById('code').value);
w.document.close();
}

function basic() {
if (document.getElementById('code').value != '') {
var r=confirm('This will erase all of your work so far!');
if (r==true) {
document.getElementById('code').value = "<html>\n<head>\n<title></title>\n</head>\n<body>\n\n</body>\n</html>";
preview();
}
}
else {
document.getElementById('code').value = "<html>\n<head>\n<title></title>\n</head>\n<body>\n\n</body>\n</html>";
preview();
}
}

function clearbox() {
if (document.getElementById('code').value != '') {
var r=confirm('This will erase all of your work so far!');
if (r==true) {
document.getElementById('code').value = "";
preview();
}
}
}