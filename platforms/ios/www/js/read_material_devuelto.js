$(document).ready(function() { 
	// jQuery is properly loaded at this point
	// so proceed to bind the Cordova's deviceready event
	app.readPosts();
	$(document).bind('deviceready', app.onDeviceReady); 
});

//identifico al empleado para mostrar sus tareas
var identificacion_empleado = sessionStorage.getItem("identificador");
var cryopt = encodeURIComponent(window.btoa(identificacion_empleado));

var app = {
//	posts_url: "http://jsonplaceholder.typicode.com/posts",
		posts_url: "http://www.webentorn.com/gtareas/backoffice/json/listamaterialesdevueltos.json.php",
	get_url : "detallematerialdevuelto.html",
	onDeviceReady: function() {
		console.log('Device is ready');
		app.readPosts();
	},

	readPosts: function() {
		console.log('Reading posts');
		$.ajax({
			type: "GET",
			dataType: "json",
			url: app.posts_url,
			success: app.onSuccess,
			error: app.onError
		});

		console.log('Reading posts asynchrounously');
	},

	onSuccess: function(data) {
		var items = [];
		$.each(data, function(key, val){
					
			

			if ((val.obtenido == 'S') && (val.devuelto =='N')) {

			var icono = '<div class="icono_obde"><i class="fas fa-calendar-check"></i></div>';
			} else if((val.obtenido == 'N') && (val.devuelto =='S')){
			var icono = '<div class="icono_deob"><i class="fas fa-undo"></i></div>';				
			}
			
			items.push('<div class="card"><div class="card-body"><a class="enlacetarea" href="' + app.get_url +'?param='+ val.id_material + '"><span class="fechas">' + val.fecha_peticion + '</span> - ' +val.id_tarea + ' <h5>' +val.nombre + '</h5>'+icono+'<div class="icono_ir"><i class="fas fa-chevron-circle-right"></i></div></a></div></div>');
			
		});
		$('#posts').html(items.join('<br/>'));
		console.log('Exiting onSuccess');
	},

	onError: function(data, textStatus, errorThrown) {
		console.log('Data: ' + data);
		console.log('Status: ' + textStatus);
		console.log('Error: ' + errorThrown);
		$("#posts").html('No hay materiales entregados o devueltos');
		console.log('Exiting onError');
	}
};
