var n = 5;
var l = document.getElementById("coun");
var s = document.getElementById("app")
var my = setInterval(function(){
  l.innerHTML = n.toString()+' segundos';
  n=n-1;
  if (n === -1){
  	clearInterval(my)
  	s.innerHTML = "<a href='wrong.html' target='_hblank'>Ya, vete.</a>"
  }
},1000);

$('#app').click(function(){
	$('#app').empty()
	$('#app').append("<a href='Checkers/index.html'>Ahora si, vete.</a>")
})
