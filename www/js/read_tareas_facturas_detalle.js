$(document).ready(function() { 
	// jQuery is properly loaded at this point
	// so proceed to bind the Cordova's deviceready event
	app.readPosts();
	$(document).bind('deviceready', app.onDeviceReady); 
});

var app = {
//TODO recibo el aparametro cparam con la id del registro y se la paso a la url para que me cree el archivo JSOn desde la BBDD
//eventualmente muestro un JSOn de prueba con el mismo registro siempre
	posts_url: "http://www.webentorn.com/gtareas/frontend/backoffice/tareas_facturas_detalle.json",
	get_url : "detallefactura.html",
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
					
			items.push('<div class="card"><div class="card-body"><h4>' + val.fecha + ' - ' +val.title + '</h4><ul><li>Cliente: ' + val.cliente + '</li><li>Direcci&oacute;n: ' + val.direccion + '</li><li>Poblaci&oacute;n: ' + val.poblacion + '</li><li>Tel.: <a href="tel:' + val.telefono + '">' + val.telefono + '</a></li></ul><p>' + val.body + '</p></div></div>');
			
		});
		$('#posts').html(items.join('<br/>'));
		console.log('Exiting onSuccess');
	},

	onError: function(data, textStatus, errorThrown) {
		console.log('Data: ' + data);
		console.log('Status: ' + textStatus);
		console.log('Error: ' + errorThrown);
		$("#posts").html('Error while loading posts');
		console.log('Exiting onError');
	}
};
