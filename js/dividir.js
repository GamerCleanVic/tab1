var btnEnviar3 = document.querySelector('.btn1')
btnEnviar3.addEventListener('click', function(event){
	event.preventDefault();
	enviar4();
	setTimeout(() => { window.scrollTo(0, document.querySelector("#fm5").scrollHeight) }, 1000);
})
document.getElementById("fm5").innerHTML = "DIVISÃO";
function enviar4() {
	const h2 = document.getElementById("fm5");
       	var b4 = document.getElementById("a").value;

	var i4 = 0;
	var c4 = parseInt(b4);
	
document.getElementById("fm5").innerHTML = "DIVISÃO<br>";		
	for(i4=10;i4>0;i4--){
		let result = (c4 / i4).toFixed(2)
		let print4 = (b4+" / "+i4+" = "+result+"<br>");

		h2.insertAdjacentHTML("afterend", "<div style='border:2px solid #d9d9d9; margin:7px; margin-right:5px; margin-left:5px;'>"+print4+"</div>");
        }

document.getElementById("rf1").innerHTML = "<a href='index.html' style='margin-left:0px; align-items:center; margin-right:80px;';><button class='btnA' style='width:403px;'>TENTAR COM OUTRO NÚMERO</button></a>";

}
