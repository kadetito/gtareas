/**
 * CARTA INICIAL
 * llamada que carga el contenido de la primera pagina
 * @returns
 */
$(document).ready(function(){
	
	
	var xmlhttp = new XMLHttpRequest();
	var url = "http://localhost/cordo/backoffice/buclecarta.txt";

	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    var myArr = JSON.parse(this.responseText);
	    myFunction(myArr);
	  }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(arr) {


	    var output = "<div class='row'>";
	    for(var i=0; i< arr.length; i++)
	    {		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

	       if((i%2)==0)
	       {
	          output += '</div><div class="row">' + '<div style="background:url(img/' + arr[i].imagen + ');background-size: 300px 135px;" class="col colored"></div>';
	       }
	       else
	       { 
	          output += '<div style="background:url(img/' + arr[i].imagen + ');background-size: 300px 135px;"  class="col colored"></div>';
	       }
	    }

	    if((i%2)!=0)
	    {
	       output += "</div><div class='row'>";
	    }
	  
//			  for(i = 0; i < arr.length; i++) {
//			     
//			      
//			              html += '<div class="col-xs-6">';
//			              html += '<a href="' + arr[i].url + '">';
//			              html += '<img src="img/' + arr[i].imagen + '" class="respon" alt="" />';
//			              html += '</a>';
//			              html += '</div>';
//			  
//		
//			  }


	  
	  
	  document.getElementById("inicial").innerHTML = output;
	}


});  