$(document).ready(function(){
	$("#accesologin").submit(function(){

			
		    $.ajax({
	            type: "POST",
	            datatype: "JSON",
	            url: "http://www.webentorn.com/gtareas/puente_crud/validalogin.puente.php",
	           
	            data: 
	            { 
	        	    'usuarioemp': $("#usuarioemp").val(),
	                'passemp': $("#passemp").val()
	              },
	            success: function(data) {
	            	
		                    var content = '';
		                    var data = $.parseJSON(data);
			                    $.each(data, function(i, post) {
			                        content += '' + post.status + '';
			                    });
		                    $(content).appendTo("#mensaje");
		                    alert(content);

	            },
	            error: function(xhr, ajaxOptions, thrownError) {
	                alert("ERROR");
	            }
	        });
		    

	});
});