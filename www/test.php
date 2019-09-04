<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ejemplo canvas mano alzada</title>
<style type="text/css">
.centrador{
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 0 0 auto;
  margin-top: 15px;
  text-align: center;
}
</style>
</head>
<body>
 
<div class='centrador'>
  <canvas id='canvas' width="200" height="200" style='border: 1px solid #CCC;'>
    <p>Tu navegador no soporta canvas</p>
  </canvas>
</div>
<div class='centrador'>
  <form id='formCanvas' method='post' action='#' ENCTYPE='multipart/form-data'>
    <button type='button' onclick='LimpiarTrazado()'>Borrar</button>
    <button type='button' onclick='GuardarTrazado()'>Guardar</button>
    <input type='hidden' name='imagen' id='imagen' />
  </form>
</div>
 
<script type="text/javascript">
/* Variables de Configuracion */
var idCanvas='canvas';
var idForm='formCanvas';
var inputImagen='imagen';
var estiloDelCursor='crosshair';
var colorDelTrazo='#555';
var colorDeFondo='#fff';
var grosorDelTrazo=2;
 
/* Variables necesarias */
var contexto=null;
var valX=0;
var valY=0;
var flag=false;
var imagen=document.getElementById(inputImagen); 
var anchoCanvas=document.getElementById(idCanvas).offsetWidth;
var altoCanvas=document.getElementById(idCanvas).offsetHeight;
var pizarraCanvas=document.getElementById(idCanvas);
 
/* Esperamos el evento load */
window.addEventListener('load',IniciarDibujo,false);
 
function IniciarDibujo(){
  /* Creamos la pizarra */
  pizarraCanvas.style.cursor=estiloDelCursor;
  contexto=pizarraCanvas.getContext('2d');
  contexto.fillStyle=colorDeFondo;
  contexto.fillRect(0,0,anchoCanvas,altoCanvas);
  contexto.strokeStyle=colorDelTrazo;
  contexto.lineWidth=grosorDelTrazo;
  contexto.lineJoin='round';
  contexto.lineCap='round';
  /* Capturamos los diferentes eventos */
  pizarraCanvas.addEventListener('mousedown',MouseDown,false);
  pizarraCanvas.addEventListener('mouseup',MouseUp,false);
  pizarraCanvas.addEventListener('mousemove',MouseMove,false);
  pizarraCanvas.addEventListener('touchstart',TouchStart,false);
  pizarraCanvas.addEventListener('touchmove',TouchMove,false);
  pizarraCanvas.addEventListener('touchend',TouchEnd,false);
  pizarraCanvas.addEventListener('touchleave',TouchEnd,false);
}
 
function MouseDown(e){
  flag=true;
  contexto.beginPath();
  valX=e.pageX-posicionX(pizarraCanvas); valY=e.pageY-posicionY(pizarraCanvas);
  contexto.moveTo(valX,valY);
}
 
function MouseUp(e){
  contexto.closePath();
  flag=false;
}
 
function MouseMove(e){
  if(flag){
    contexto.beginPath();
    contexto.moveTo(valX,valY);
    valX=e.pageX-posicionX(pizarraCanvas); valY=e.pageY-posicionY(pizarraCanvas);
    contexto.lineTo(valX,valY);
    contexto.closePath();
    contexto.stroke();
  }
}
 
function TouchMove(e){
  e.preventDefault();
  if (e.targetTouches.length == 1) { 
    var touch = e.targetTouches[0]; 
    MouseMove(touch);
  }
}
 
function TouchStart(e){
  if (e.targetTouches.length == 1) { 
    var touch = e.targetTouches[0]; 
    MouseDown(touch);
  }
}
 
function TouchEnd(e){
  if (e.targetTouches.length == 1) { 
    var touch = e.targetTouches[0]; 
    MouseUp(touch);
  }
}
 
function posicionY(obj) {
  var valor = obj.offsetTop;
  if (obj.offsetParent) valor += posicionY(obj.offsetParent);
  return valor;
}
 
function posicionX(obj) {
  var valor = obj.offsetLeft;
  if (obj.offsetParent) valor += posicionX(obj.offsetParent);
  return valor;
}
 
/* Limpiar pizarra */
function LimpiarTrazado(){
  contexto=document.getElementById(idCanvas).getContext('2d');
  contexto.fillStyle=colorDeFondo;
  contexto.fillRect(0,0,anchoCanvas,altoCanvas);
}
 
/* Enviar el trazado */
function GuardarTrazado(){
  imagen.value=document.getElementById(idCanvas).toDataURL('image/png');
  document.forms[idForm].submit();
}
</script>
 
 
<?php if (isset($_POST['imagen'])) { ?>
<div class='centrador'>
    <img src="<?php echo $_POST['imagen'];?>" border="1">
</div>
<?php } ?>
 
</body>
</html>