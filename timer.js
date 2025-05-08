function odliczanie()
	{
		var dzisiaj = new Date();
		

		
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",1000);
	}

function loadContent(content) {
    const tile5 = document.querySelector('.tile5');
    switch(content) {
        case 'hvem':
            tile5.innerHTML = 'Hvem er vi?<br/><br/>Vi er et kreativt selskap som spesialiserer oss på grafisk design, webutvikling og digital markedsføring. Vår målsetning er å hjelpe deg med å realisere din visjon og skape en unik online tilstedeværelse.';
            break;
        case 'tilbud':
            tile5.innerHTML = 'Vår tilbud<br/><br/>* Profesjonell webdesign.<br/>* Grafisk design.<br/>* Logo og visuell identitet.<br/>* Programmering i Java, Python og C++.<br/>* Kunstig intelligens for automatisering.<br/>* Dine unike behov og mål på nettet.';
            break;
        case 'portfolio':
            tile5.innerHTML = 'Vår portefølje<br/><br/>Se våre tidligere prosjekter og kreative løsninger.';
            break;
        case 'kontakt':
            tile5.innerHTML = 'Kontakt<br/><br/>Email: nettdesignmagi@gmail.com<br/>Mobile: (+47)925-57-891';
            break;
    }
}