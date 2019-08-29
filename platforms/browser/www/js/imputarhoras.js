$("#impu").submit(function(){
	$(function() {
	    $('#impu').validate({
	        rules: {
	        	horas_imputadas: {
	               required: true,
	               time24: true
	             }
	        }
	    });
	    
	    
	    $.ajax({
            type: "POST",
            url: "http://www.webentorn.com/gtareas/puente_crud/insert.puente.php",
           
            data: 
            { 
        	    'id_tarea': $("#id_tarea").val(),
                'horas_imputadas': $("#horas_imputadas").val(),
                'id_usuario': $("#id_usuario").val()
              },
            success: function(response) {
            	 alert('guardado');
            	 console.log("id_tarea: "+$("#id_tarea").val());         
				 console.log("horas_imputadas: "+$("#horas_imputadas").val());         
				 console.log("id_usuario: "+$("#id_usuario").val());        
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError);
            }
        });
	    
	})
});
