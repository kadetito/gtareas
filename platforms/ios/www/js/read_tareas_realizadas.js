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
		posts_url: "http://www.webentorn.com/gtareas/backoffice/json/listatareasrealizadas.json.php",
	get_url : "detalletarearealizada.html",
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
					
			items.push('<div class="row row-striped"><div class="col-2 text-center"><h3 class="displaydia">'+val.numerodia+'</h3><h4 class="nombremes">'+val.nombremes+'</h4></div><div class="col-10"><a class="enlacetarea" href="' + app.get_url +'?param='+ val.id_tarea + '"><h3 class="text-uppercase"><strong>' +val.titulo + '</strong></h3><ul class="list-inline"><li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> '+val.nombredia+'</li><li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> 12:30 PM - 2:00 PM</li><li class="list-inline-item"><i class="fas fa-chevron-circle-right"></i></li></ul><p>'+val.resumen+'</p></a></div></div>');
			
		});
		$('#posts').html(items.join(''));
		console.log('Exiting onSuccess');
	},

	onError: function(data, textStatus, errorThrown) {
		console.log('Data: ' + data);
		console.log('Status: ' + textStatus);
		console.log('Error: ' + errorThrown);
		$("#posts").html('No hay tareas realizadas');
		console.log('Exiting onError');
	}
};
