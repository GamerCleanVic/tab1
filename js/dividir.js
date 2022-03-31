var btnEnviar2 = document.querySelector('.btn1')
btnEnviar2.addEventListener('click', function(event){
	event.preventDefault();
	enviar4();
})
document.getElementById("fm5").innerHTML = "DIVISÃO";
function enviar4() {
	const h5 = document.getElementById("fm5");
       	var b4 = document.getElementById("a").value;

	var i4 = 0;
	var c4 = parseInt(b4);
	
document.getElementById("fm5").innerHTML = "DIVISÃO<br>";		
	for(i4=10;i4>0;i4--){
		let print4 = (b4+" / "+i4+" = "+(c4 / i4)+"<br>");
		h5.insertAdjacentHTML("afterend", print4);
        }

document.getElementById("rf1").innerHTML = "<a href='index.html'><button class='btnA'>TENTAR COM OUTRO NÚMERO</button></a>";
}
