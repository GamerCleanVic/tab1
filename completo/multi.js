var btnEnviar2 = document.querySelector('.btn1')
btnEnviar2.addEventListener('click', function(event){
	event.preventDefault();
	enviar3();
})
document.getElementById("fm4").innerHTML = "MULTIPLICAÇÃO";
function enviar3() {
	const h2 = document.getElementById("fm4");
       	var b3 = document.getElementById("a").value;

	var i3 = 0;
	var c3 = parseInt(b3);
       	
	document.getElementById("fm4").innerHTML = "MULTIPLICAÇÃO<br>";	
	for(i3=10;i3>0;i3--){
		let print3 = (b3+" x "+i3+" = "+(c3 * i3)+"<br>");

		h2.insertAdjacentHTML("afterend", "<div style='border:2px solid #d9d9d9; margin:7px; margin-right:5px; margin-left:5px;'>"+print3+"</div>");
        }
}
