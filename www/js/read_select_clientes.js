$(document).ready(function() { 
	
	$("#selecttarea").change(function(){
		
		
		
		    var identificadortarea = $('select[id=selecttarea]').val();
		   
		    localStorage.setItem("identificadortr",identificadortarea);
			apppcl.readPostsH();
			$(document).bind('deviceready', apppcl.onDeviceReady); 
			alert(localStorage.getItem("identificadortr"));

	});
	
});

//identifico al empleado para mostrar sus tareas
var identificacion_emplead = sessionStorage.getItem("identificador");
var dortarea = localStorage.getItem("identificadortr");

//SCRIPT MUESTRA TAREAS EN BUCLE
var apppcl = {
	posts_urlcl: "http://www.webentorn.com/gtareas/backoffice/json/listas_selects_clientes.json.php?id_empleado="+identificacion_emplead+"&id_tarea="+dortarea,
//	get_url : "detalletarea.html",
	onDeviceReady: function() {
		console.log('Device is ready');
		apppcl.readPostsH();
	},
	readPostsH: function() {
		console.log('Reading posts');
		$.ajax({
			type: "GET",
			dataType: "json",
			url: apppcl.posts_urlcl,
			success: apppcl.onSuccess

		});
		console.log('Reading posts asynchrounously');
	},

	onSuccess: function(datoscl) {
		var selectcliente = [];

		$.each(datoscl, function(key, val){
			if(val.empresa==''){
				selectcliente.push('<option value="' + val.id_cliente + '"> ' + val.nombre + ' ' + val.apellido1 + ' ' + val.apellido2 + '</option>');
			} else {
				selectcliente.push('<option value="' + val.id_cliente + '"> ' + val.empresa + '</option>');	
			}
		});
		//localStorage.removeItem("identificadortr");
		$('#selectcliente').html(selectcliente.join('<br/>'));
	},

//	onError: function(data, textStatus, errorThrown) {
//		console.log('Data: ' + data);
//		console.log('Status: ' + textStatus);
//		console.log('Error: ' + errorThrown);
//		$("#posts").html('Error while loading posts');
//		console.log('Exiting onError');
//	}
};
