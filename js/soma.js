var btnEnviar = document.querySelector('.btn1')
	btnEnviar.addEventListener('click', function(event){
		event.preventDefault();
		enviar();
	})
        function enviar() {
        var b = document.getElementById("a").value;
        document.getElementById("fm1").innerHTML = "TABUADA DO: " + b + "<br><br>";
        document.getElementById("fm2").innerHTML = "SOMA" + "<br>";
	var i = 0;
	var c = parseInt(b);
document.write("TABUADA DO "+b+"<br><br>");
document.write("SOMA"+"<br>");


        	for(i=1;i<=10;i++){
			/*document.getElementById("fm3").innerHTML =(b+" + "+i+" = "+(c + i)+"<br>"); */
			/*document.body.style.backgroundColor = '#1b1b1b';*/
			document.write(b+" + "+i+" = "+(c + i)+"<br>");
        	}

document.write("<br><br>");

	}

