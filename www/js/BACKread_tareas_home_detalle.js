$(document).ready(function() { 
	// jQuery is properly loaded at this point
	// so proceed to bind the Cordova's deviceready event
//	app.readPosts();
//	$(document).bind('deviceready', app.onDeviceReady); 

//var id = "1";
//var app = {
//	posts_url: "http://jsonplaceholder.typicode.com/posts",
		

		fetch('http://www.webentorn.com/gtareas/frontend/backoffice/tareas_home.json?id=1')
		  .then(response => response.json())
		  .then(json => console.log(json))
		
//	posts_url: "http://www.webentorn.com/gtareas/frontend/backoffice/tareas_home.json",
//
//	
//	//get_url : "detalletarea.html",
//	onDeviceReady: function() {
//		console.log('Device is ready');
//		app.readPosts();
//		
//	},
//
//	readPosts: function() {
//		console.log('Reading posts');
//		$.ajax({
//			type: "GET",
//			dataType: "json",
//			url: app.posts_url,
//			success: app.onSuccess,
//			error: app.onError
//		});
//
//		console.log('Reading posts asynchrounously');
//	},
//
//	onSuccess: function(data) {
//
//		
//		
//		var items = [];
//		$.each(data, function(key, val){
//					
//			items.push('<div class="card"><div class="card-body"><a href="' + app.posts_url +'?param='+ val.id + '">' + val.id + ' - ' +val.title + '</a></div></div>');
//			
//		});
//		$('#posts').html(items.join('<br/>'));
//		console.log('Exiting onSuccess');
//	},
//
//	onError: function(data, textStatus, errorThrown) {
//		console.log('Data: ' + data);
//		console.log('Status: ' + textStatus);
//		console.log('Error: ' + errorThrown);
//		$("#posts").html('Error while loading posts');
//		console.log('Exiting onError');
//	}
//};

});