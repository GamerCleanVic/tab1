var btnEnviar = document.querySelector('.btn1')
btnEnviar.addEventListener('click', function(event){
	event.preventDefault();
	enviar();
})
function enviar() {
	const h5 = document.getElementById("fm2");
       	var b = document.getElementById("a").value;

	var i = 0;
	var c = parseInt(b);

	for(i=10;i>0;i--){
		let print8 = (b+" + "+i+" = "+(c + i)+"<br>");
		h5.insertAdjacentHTML("afterend", print8);
        }
		
	let print9 = ("<br><br>");
	h5.insertAdjacentHTML("afterend", print9);
}


