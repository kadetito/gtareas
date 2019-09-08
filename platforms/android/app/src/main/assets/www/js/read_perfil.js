$(document).ready(function() { 
	// jQuery is properly loaded at this point
	// so proceed to bind the Cordova's deviceready event
	appp.readPostsX();
	$(document).bind('deviceready', appp.onDeviceReady); 
});

//identifico al empleado para mostrar sus tareas
var identificacion_emplead = sessionStorage.getItem("identificador");
var cryoptperf = encodeURIComponent(window.btoa(identificacion_emplead));

var appp = {
//TODO recibo el aparametro cparam con la id del registro y se la paso a la url para que me cree el archivo JSOn desde la BBDD
//eventualmente muestro un JSOn de prueba con el mismo registro siempre
	posts_url: "http://www.webentorn.com/gtareas/backoffice/json/detalleempleados.json.php?id_empleado="+identificacion_emplead,
	get_url : "detalletarea.html",
	onDeviceReady: function() {
		console.log('Device is ready');
		appp.readPosts();
	},

	readPostsX: function() {
		console.log('Reading posts');
		$.ajax({
			type: "GET",
			dataType: "json",
			url: appp.posts_url,
			success: appp.onSuccess

		});

		console.log('Reading posts asynchrounously');
	},

	onSuccess: function(datos) {
		//var items = [];
		var sidebaritem = [];
		$.each(datos, function(key, val){
			//items.push('<div class="card"><div class="card-body"><div class="text-center"><img src="' + val.foto + '" alt="' + val.codigo_empleado + '" /></div><ul><li>N&uacute;mero: ' + val.codigo_empleado + '</li><li>Nombre: ' + val.nombre + ' ' + val.apellido1 + ' ' + val.apellido2 + '</li><li>Tel.: <a href="tel:' + val.telefono_empleado + '">' + val.telefono_empleado + '</a></li><li>Usuario: ' + val.usuario_empleado + '</li><li>Password: ' + val.password_empleado + '</li></ul></div></div>');

			sidebaritem.push('<p>' + val.nombre + ' ' + val.apellido1 + '</p><p>Núm: ' + val.codigo_empleado + '</p>');

		});
		//$('#posts').html(items.join('<br/>'));
		$('#sidebaritem').html(sidebaritem.join('<br/>'));
		console.log('Exiting onSuccess');
	},

//	onError: function(data, textStatus, errorThrown) {
//		console.log('Data: ' + data);
//		console.log('Status: ' + textStatus);
//		console.log('Error: ' + errorThrown);
//		$("#posts").html('Error while loading posts');
//		console.log('Exiting onError');
//	}
};
