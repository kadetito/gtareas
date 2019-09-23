$(document).ready(function() { 
//	e.preventDefault();
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
		selecttarea.push('<option value="0">Seleccione la tarea</option>');
		$.each(datos, function(key, val){
			selecttarea.push('<option value="' + val.id_tarea + '"> ' + val.codigo_tarea + ' ' + val.titulo + '</option>');
		});		
		$('#selecttarea').html(selecttarea.join('<br/>'));
		
		
					
					$("#selecttarea").change(function(){	
						
								var dtarea = document.getElementById("selecttarea");
								var dortarea = dtarea.options[dtarea.selectedIndex].value;
								
								
					if(dortarea==0){
						

						
						var dclien = document.getElementById("selectcliente");
						  dclien.remove(dclien.selectedIndex);
						  
						//alert(dcliente);
						
						
					} else {
								$.ajax({
									type: "GET",
									dataType: "json",
									url: "http://www.webentorn.com/gtareas/backoffice/json/listas_selects_clientes.json.php?id_empleado="+identificacion_emplead+"&id_tarea="+dortarea
									,

								success: function(datoscl) {
									var selectcliente = [];
									
									$.each(datoscl, function(key, val){
										if(val.empresa==''){
											selectcliente.push('<option value="' + val.id_cliente + '"> ' + val.nombre + ' ' + val.apellido1 + ' ' + val.apellido2 + '</option>');
										} else {
											selectcliente.push('<option value="' + val.id_cliente + '"> ' + val.empresa + '</option>');	
										}
									});
									$('#selectcliente').html(selectcliente.join('<br/>'));
										}
								});
								
					}						
								
								
								
							
					});
		
	},

//	onError: function(data, textStatus, errorThrown) {
//		console.log('Data: ' + data);
//		console.log('Status: ' + textStatus);
//		console.log('Error: ' + errorThrown);
//		$("#posts").html('Error while loading posts');
//		console.log('Exiting onError');
//	}
};
