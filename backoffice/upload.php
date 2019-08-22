<?php
// Copiado de http://ricardogeek.com/como-subir-archivos-con-javascript/

	$foto = $_FILES['pic'];
	$data = array('success' => false);
	
	if(copy($foto['tmp_name'],'Fotos/'.$foto['name'])){
		$data = array('success' => true);
	}
	
	echo json_encode($data);
?>