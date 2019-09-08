$(document).ready(function() { 
	

		 $('#formCanvas').on('submit', function(e){
			 e.preventDefault();
	
    var canvas_vacio = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAACWCAYAAACBxXC+AAAEyklEQVR4Xu3UsQ0AAAjDMPr/0zyR0RzQwULZOQIECBBIBJasGCFAgACBE1RPQIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBAQVD9AgACBSEBQI0gzBAgQEFQ/QIAAgUhAUCNIMwQIEBBUP0CAAIFIQFAjSDMECBB4W7UAl152/1sAAAAASUVORK5CYII=';
			 //validamos que las horas no sean iguales
	var clave1 = document.f1.hora_inicio.value;
	var clave2 = document.f1.hora_fin.value;	
	if (clave1 == clave2){
		  alert("La hora de inicio y final no pueden ser la misma");
	} 
	
	else if(canvas.toDataURL()==canvas_vacio) {
		 alert("El cliente debe firmar el documento");
	} else {
				       
				 
			 
 
		
		var a1 = sessionStorage.getItem("identificador");

		
		
		
		  $.ajax({
				            type: "POST",
				            url: "http://www.webentorn.com/gtareas/puente_crud/insert.puente.php",
				            firma : canvas.toDataURL(),
				            data: 
				            { 
				            	'id_empleado': a1,
				            	'parte': $("#parte").val(),
				            	'fecha': $("#fecha").val(),
				            	'id_tarea': $("#selecttarea").val(),
				            	'id_cliente': $("#selectcliente").val(),
				            	'hora_inicio': $("#hora_inicio").val(),
				            	'hora_fin': $("#hora_fin").val(),
				            	'firma': canvas.toDataURL(),
//				            	$('#imagen').attr('src', '/uploads/imagen.png?timestamp=' + new Date().getTime());
				            	'observaciones': $("#observaciones").val()
			                  },

				         
				            success: function(response) {
				            	 alert('parte creado');
//				            	 
//				            	 
//					            	console.log(a1);
//					            	console.log($("#parte").val());
//					            	console.log($("#fecha").val());
//					            	console.log($("#selecttarea").val());
//					            	console.log($("#selectcliente").val());
//					            	console.log($("#hora_inicio").val());
//					            	console.log($("#hora_fin").val());
//					            	console.log(canvas.toDataURL());
//					            	console.log($("#observaciones").val());
//					            	
					            	
								   location.href = "partes.html";
				            },
				            error: function(xhr, ajaxOptions, thrownError) {
				                //alert(xhr.statusText);
				                alert(thrownError);
				            }
				        });
	 }
	 });
		
});