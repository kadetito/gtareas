//$(document).ready(function() { 
//	// jQuery is properly loaded at this point
//	// so proceed to bind the Cordova's deviceready event
//
//});

//identifico al empleado para mostrar sus tareas
var identificacion_empleado = sessionStorage.getItem("identificador");
var cryopt = encodeURIComponent(window.btoa(identificacion_empleado));

var app = {

//		posts_url: "http://www.webentorn.com/gtareas/backoffice/json/listahoras.json.php?id_empleado="+identificacion_empleado+"&dia="+dia+"&mes="+mes+"&anyo="+anyo,

	get_url : "detallematerialdevuelto.html",
	onDeviceReady: function() {
		console.log('Device is ready');
		app.readPosts(dia,mes,anyo);
	},
	
	readPosts: function(dia,mes,anyo) {
	
		if(dia==''){
			posts_url= "http://www.webentorn.com/gtareas/backoffice/json/listahoras.json.php?id_empleado="+identificacion_empleado;
		} else {
			posts_url= "http://www.webentorn.com/gtareas/backoffice/json/listahorasdia.json.php?id_empleado="+identificacion_empleado+"&dia="+dia+"&mes="+mes+"&anyo="+anyo;	
		}
		
		console.log('Reading posts');
		$.ajax({
			type: "GET",
			dataType: "json",
			url: posts_url,
			success: app.onSuccess,
			error: app.onError
		});

		console.log('Reading posts asynchrounously');
	},

	onSuccess: function(data) {
		var items = [];
		$.each(data, function(key, val){
			items.push('<div class="card"><div class="card-body"><span class="fechas">' + val.fecha + '</span> - ' +val.horario + ' - Horas: ' +val.numero_horas + ' Fase: ' +val.fase + '</div></div>');			
		});
		$('#posts').html(items.join('<br/>'));
		console.log('Exiting onSuccess');
	},

	onError: function(data, textStatus, errorThrown) {
		console.log('Data: ' + data);
		console.log('Status: ' + textStatus);
		console.log('Error: ' + errorThrown);
		$("#posts").html('No se han asignado horas para este día');
		console.log('Exiting onError');
	}
};
