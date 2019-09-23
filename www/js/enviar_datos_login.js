
$("#sending").click(function(){

	event.preventDefault();
    $.ajax({
        type: "POST",
        datatype: "JSON",
        url: "http://www.webentorn.com/gtareas/puente_crud/validalogin.puente.php",
       
        data: 
        { 
    	    'usuarioempleado': $("#usuarioempleado").val(),
            'passempleado': $("#passempleado").val()
          },
        success: function(data) {
        	
        	var u = $("#usuarioempleado").val();
        	var p = $("#passempleado").val();
        	
            var data = $.parseJSON(data);

	            	    $.each(data, function(i, field){
	            	    
	            	    	if(data.status=='ok'){
	            	    		sessionStorage.setItem("usuario", u);
	            	    		sessionStorage.setItem("password", p);
	            	    		sessionStorage.setItem("identificador", data.identificador);


	            	    		let timerInterval
	            	    		Swal.fire({
	            	    		  title: 'Accediendo!',
	            	    		  html: '...un momento, por favor.',
	            	    		  timer: 1000,
	            	    		  onBeforeOpen: () => {
	            	    		    Swal.showLoading()
	            	    		    timerInterval = setInterval(() => {
	            	    		      Swal.getContent().querySelector('strong')
//	            	    		        .textContent = Swal.getTimerLeft()
	            	    		    }, 100)
	            	    		  },
	            	    		  onClose: () => {
	            	    		    clearInterval(timerInterval)
	            	    		  }
	            	    		}).then((result) => {
	            	    			window.location.href = "index.html";
	            	    		  if (
	            	    		    /* Read more about handling dismissals below */
	            	    		    result.dismiss === Swal.DismissReason.timer
	            	    		  ) {
	            	    		    console.log('I was closed by the timer')
	            	    		  }
	            	    		})

	            	    		
	            	    		
	            	    		
	            	    	} else {
	            	    		sessionStorage.removeItem("usuario");
	            	    		sessionStorage.removeItem("password");
//	            	    		alert("los datos no son correctos");
	            	    		
	            	    		Swal.fire({
	            	    			  title: 'Error!',
	            	    			  text: 'Los datos de acceso no son correctos',
	            	    			  type: 'error',
	            	    			  confirmButtonText: 'Aceptar'
	            	    			})
	            	    			
	            	    			
	            	    	}

	            	    });
	            
	            	
//	            	    throw new Error("Something went badly wrong!");
	    

        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert("ERROR");
        }
    });
    
    //alert('');
});
