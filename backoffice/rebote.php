<?php 
include_once('G_Basic.php');
if (false) include_once('..\..\code0040\S_ClassDefinition1.php'); // Definició de clases


$usuario=htmlspecialchars(trim($_GET['txt_usuario']));
$clave=htmlspecialchars(trim($_GET['txt_clave']));

$User = new User($usuario, $clave); // si passem dos parametres, fem login
$UserArray = (array) $User;			// Convertim de Objecte a Array

//Creamos el JSON
$json_string = json_encode($UserArray);

echo  $json_string;
//Si queremos crear un archivo json, sería de esta forma:

//$file = 'agenda.json';
//file_put_contents($file, $json_string);

//--- Montrar rendimiento ---

if (DebugLevel()&128) 
	{
	echo '<br><br>loading libraries : ';
	print_r(array('memory (MB)' => number_format((memory_get_usage() - $WE_mem) / (1024 * 1024),3), 'seconds' => number_format(getmicrotime() - $WebExpoGlobals['Time'],4)));
	
	echo '<br>WebExpo Loaded clases: ';
	$clases = get_declared_classes();
	if($clases) 
		foreach ($clases as $clase) 
			if (!in_array($clase,$clases_iniciales))
				echo '['.$clase.'], '; // si no es de la iniciales, la muestra
	echo '<br>';
	}

?>