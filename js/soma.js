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
if(document.getElementById("a").value == ""){
                document.write("<a href='index.html' style='font-size:33px; font-weight:bold;'>CLICK DIGITE 1 Nº INTEIRO!</a>");
        }
	else if(document.getElementById("a").value <= 0){
		document.write("<a href='index.html' style='font-size:33px; font-weight:bold;'>CLICK E DIGITE 1 Nº INTEIRO DIFERENTE DE ZERO!</a>");
	}
       		document.getElementById("fm1").innerHTML = "TABUADA DO " + b;

		var i = 0;
		var c = parseInt(b);

	
		document.getElementById("fm2").innerHTML = "SOMA<br>";
		var c = parseInt(b);
		for(i=10;i>0;i--){
			let print1 = (b+" + "+i+" = "+(c + i)+"<br>");
			h2.insertAdjacentHTML("afterend", print1);


        	}
/*	} */
}
