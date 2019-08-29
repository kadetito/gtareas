$(document).ready(function() { 
	// jQuery is properly loaded at this point
	// so proceed to bind the Cordova's deviceready event
	app.readPosts();
	$(document).bind('deviceready', app.onDeviceReady); 
});

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
					
			items.push('<div class="card"><div class="card-body"><a href="' + app.get_url +'?param='+ val.id_tarea + '">' + val.fecha + ' - ' +val.codigo_tarea + ' - ' +val.titulo + '</a></div></div>');
			
		});
		$('#posts').html(items.join('<br/>'));
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