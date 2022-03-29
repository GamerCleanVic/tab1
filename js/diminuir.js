var btnEnviar = document.querySelector('.btn1')
btnEnviar.addEventListener('click', function(event){
	event.preventDefault();
	enviar();
})
function enviar() {
	const h3 = document.getElementById("fm2");
       	var b = document.getElementById("a").value;

	var i = 0;
	var c = parseInt(b);

	for(i=10;i>0;i--){
		let print4 = (b+" + "+i+" = "+(c + i)+"<br>");
		h3.insertAdjacentHTML("afterend", print4);
        }
		
	let print5 = ("<br><br>");
	h3.insertAdjacentHTML("afterend", print5);
}
