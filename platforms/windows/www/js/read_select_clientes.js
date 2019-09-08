$(document).ready(function() { 
	
	$("#selecttarea").change(function(){
//		localStorage.removeItem("identificadortr");
		    var identificadortarea = $('select[id=selecttarea]').val();
		    localStorage.setItem("identificadortr",identificadortarea);
			apppcl.readPostsH();
			$(document).bind('deviceready', apppcl.onDeviceReady); 


	});
	
});

//alert(sessionStorage.getItem("identificador"));
var identificacion_emplead = sessionStorage.getItem("identificador");
var dortarea = localStorage.getItem("identificadortr");

var apppcl = {
	posts_urlcl: "http://www.webentorn.com/gtareas/backoffice/json/listas_selects_clientes.json.php?id_empleado="+identificacion_emplead+"&id_tarea="+dortarea,
	onDeviceReady: function() {
		apppcl.readPostsH();
	},
	readPostsH: function() {
		$.ajax({
			type: "GET",
			dataType: "json",
			url: apppcl.posts_urlcl,
			success: apppcl.onSuccess

		});
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

		$('#selectcliente').html(selectcliente.join('<br/>'));
	},

};
