var btnEnviar3 = document.querySelector('.btn3')
btnEnviar3.addEventListener('click', function(event){
	event.preventDefault();
	enviar4();
})
document.getElementById("fm5").innerHTML = "DIVISÃO";
function enviar4() {
	const h2 = document.getElementById("fm5");
       	var b4 = document.getElementById("a").value;

	var i4 = 0;
	var c4 = parseInt(b4);
	
document.getElementById("fm5").innerHTML = "DIVISÃO<br>";		
	for(i4=10;i4>0;i4--){
		let print4 = (b4+" / "+i4+" = "+(c4 / i4)+"<br>");

		h2.insertAdjacentHTML("afterend", "<div style='border:2px solid #d9d9d9; margin:7px; margin-right:5px; margin-left:5px;'>"+print4+"</div>");
        }

document.getElementById("rf1").innerHTML = "<a href='index.html'><button class='btnA'>TENTAR COM OUTRO NÚMERO</button></a>";
}
