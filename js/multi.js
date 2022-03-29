var btnEnviar = document.querySelector('.btn1')
btnEnviar.addEventListener('click', function(event){
	event.preventDefault();
	enviar();
})
function enviar() {
	const h4 = document.getElementById("fm2");
       	var b = document.getElementById("a").value;

	var i = 0;
	var c = parseInt(b);

	for(i=10;i>0;i--){
		let print6 = (b+" + "+i+" = "+(c + i)+"<br>");
		h4.insertAdjacentHTML("afterend", print6);
        }
		
	let print7 = ("<br><br>");
	h4.insertAdjacentHTML("afterend", print7);
}
