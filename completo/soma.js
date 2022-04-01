var btnEnviar = document.querySelector('.btn3')
btnEnviar.addEventListener('click', function(event){
	event.preventDefault();
	enviar5();
})
document.getElementById("fm1").innerHTML = "<h1 style='border-radius:20px; border-bottom:3px solid #e6e6e6;'>TABUADA</h1>";
document.getElementById("fm2").innerHTML = "SOMA";
function enviar5() {
	const h2 = document.getElementById("fm2");
       	var b = document.getElementById("a").value;
if(document.getElementById("a").value == ""){
                document.write(
			"<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK DIGITE 1 Nº INTEIRO!</a>");
        }
	else if(document.getElementById("a").value <= 0){
		document.write("<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK E DIGITE 1 Nº INTEIRO DIFERENTE DE ZERO!</a>");
	}
       		document.getElementById("fm1").innerHTML = "TABUADA DO " + b;

		var i = 0;
		var c = parseInt(b);

	
		document.getElementById("fm2").innerHTML = "SOMA<br>";
		var c = parseInt(b);
		for(i=10;i>0;i--){
			let print1 = (b+" + "+i+" = "+(c + i)+"<br>");

			h2.insertAdjacentHTML("afterend", "<div style='border:2px solid #d9d9d9; margin:7px; margin-right:5px; margin-left:5px;'>"+print1+"</div>");

        	}
}
