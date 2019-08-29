///**
// * TAREAS HOME
// * llamada que carga el contenido de la primera pagina
// * @returns
// */
//
//function loadXMLDoc() {
//  var xmlhttp = new XMLHttpRequest();
//  xmlhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//      myFunction(this);
//    }
//  };
//  xmlhttp.open("GET", "http://www.webentorn.com/gtareas/frontend/www/cd_catalog.xml" , true);
//  //xmlhttp.send();
//}
//
//function myFunction(xml) {
//	  var x, i, xmlDoc, table;
//	  xmlDoc = xml.responseXML;
//	  table = "<tr><th>Artist</th><th>Title</th></tr>";
//	  x = xmlDoc.getElementsByTagName("CD")
//	  for (i = 0; i < x.length; i++) { 
//	    table += "<tr><td>" + 
//	    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
//	    "</td><td>" +
//	    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
//	    "</td></tr>";
//	  }
//	  document.getElementById("listatareas").innerHTML = table;
//	}





/**
 * CARTA INICIAL
 * llamada que carga el contenido de la primera pagina
 * @returns
 */
$(document).ready(function(){
	
	
	var xmlhttp = new XMLHttpRequest();
	var url = "http://www.webentorn.com/gtareas/frontend/www/buclecarta.txt";

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