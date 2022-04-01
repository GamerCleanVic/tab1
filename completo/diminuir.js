var btnEnviar2 = document.querySelector('.btn3')
btnEnviar2.addEventListener('click', function(event){
	event.preventDefault();
	enviar6();
})
document.getElementById("fm3").innerHTML = "SUBTRAÇÃO";
function enviar6() {
	const h2 = document.getElementById("fm3");
       	var b2 = document.getElementById("a").value;

	var i2 = 0;
	var c2 = parseInt(b2);
		
       	document.getElementById("fm3").innerHTML = "SUBTRAÇÃO<br>";
	for(i2=10;i2>0;i2--){
		let print2 = (b2+" - "+i2+" = "+(c2 - i2)+"<br>");
			
		h2.insertAdjacentHTML("afterend", "<div style='border:2px solid #d9d9d9; margin:7px; margin-right:5px; margin-left:5px;'>"+print2+"</div>");
        }
}
