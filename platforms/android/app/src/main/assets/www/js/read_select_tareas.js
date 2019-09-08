$(document).ready(function() { 
	appp.readPostsX();
	$(document).bind('deviceready', appp.onDeviceReady); 
});

//identifico al empleado para mostrar sus tareas
var identificacion_emplead = sessionStorage.getItem("identificador");
var cryoptperf = encodeURIComponent(window.btoa(identificacion_emplead));


//SCRIPT MUESTRA TAREAS EN BUCLE
var appp = {
	posts_url: "http://www.webentorn.com/gtareas/backoffice/json/listas_selects_tareas.json.php?id_empleado="+identificacion_emplead,

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
		var selecttarea = [];
		
		selecttarea.push('<option value="">Seleccione la tarea</option>');
		
		$.each(datos, function(key, val){

			selecttarea.push('<option value="' + val.id_tarea + '"> ' + val.codigo_tarea + ' ' + val.titulo + '</option>');

		});
		
		$('#selecttarea').html(selecttarea.join('<br/>'));
	},

//	onError: function(data, textStatus, errorThrown) {
//		console.log('Data: ' + data);
//		console.log('Status: ' + textStatus);
//		console.log('Error: ' + errorThrown);
//		$("#posts").html('Error while loading posts');
//		console.log('Exiting onError');
//	}
};
