var btnEnviar = document.querySelector('.btn1')
btnEnviar.addEventListener('click', function(event){
	event.preventDefault();
	enviar();
})
function enviar() {
	const h2 = document.getElementById("fm2");
       	var b = document.getElementById("a").value;
       	document.getElementById("fm1").innerHTML = "TABUADA DO " + b;

	var i = 0;
	var c = parseInt(b);

	let print10 = ("<p></p>");
	h2.insertAdjacentHTML("afterend", print10);

	for(i=10;i>0;i--){
		let print8 = (b+" / "+i+" = "+(c / i)+"<br>");
		h2.insertAdjacentHTML("afterend", print8);
        }
		
	let print9 = ("<p></p>");
	h2.insertAdjacentHTML("afterend", print9);

	for(i=10;i>0;i--){
		let print6 = (b+" x "+i+" = "+(c * i)+"<br>");
		h2.insertAdjacentHTML("afterend", print6);
        }
		
	let print7 = ("<p></p>");
	h2.insertAdjacentHTML("afterend", print7);

	for(i=10;i>0;i--){
		let print4 = (b+" - "+i+" = "+(c - i)+"<br>");
		h2.insertAdjacentHTML("afterend", print4);
        }
		
	let print5 = ("<p></p>");
	h2.insertAdjacentHTML("afterend", print5);

	for(i=10;i>0;i--){
		let print2 = (b+" + "+i+" = "+(c + i)+"<br>");
		h2.insertAdjacentHTML("afterend", print2);
        }
		
	let print3 = ("<p></p>");
	h2.insertAdjacentHTML("afterend", print3);
}
