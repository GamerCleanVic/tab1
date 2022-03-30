var btnEnviar = document.querySelector('.btn1')
btnEnviar.addEventListener('click', function(event){
	event.preventDefault();
	enviar();
})
document.getElementById("fm1").innerHTML = "TABUADA";
document.getElementById("fm2").innerHTML = "SOMA";
function enviar() {
	const h2 = document.getElementById("fm2");
       	var b = document.getElementById("a").value;
       	document.getElementById("fm1").innerHTML = "TABUADA DO " + b;

	var i = 0;
	var c = parseInt(b);
		
	document.getElementById("fm2").innerHTML = "SOMA<br>";
	for(i=10;i>0;i--){
		let print1 = (b+" + "+i+" = "+(c + i)+"<br>");
		h2.insertAdjacentHTML("afterend", print1);
        }
}
