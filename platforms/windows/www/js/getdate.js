$(document).ready(function(){
	

		  var today = new Date();
		  var dd = today.getDate();
		  var mm = today.getMonth()+1; //January is 0!
		  var yyyy = today.getFullYear();

		  var s = today.getSeconds();
		  var i = today.getMinutes();
		  var H = today.getHours();
		  
		  if(dd<10) {
		      dd = '0'+dd
		  } 

		  if(mm<10) {
		      mm = '0'+mm
		  } 

		  today = yyyy + '/' + mm + '/' + dd + ' '+ H +':'+ i +':'+ s;
		  console.log(today);
		  document.getElementById("fecha").value = today;
		

});