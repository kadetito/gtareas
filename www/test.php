
<html>
<head>
<script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>

<!--[if IE]><script type="text/javascript" src="/excanvas_r3/excanvas.js"></script><![endif]-->
<script type="text/javascript">
  var movimientos = new Array();
  var pulsado;

    function initCanvas() {
        canvasDiv = document.getElementById('canvasDiv');
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', 400);
        canvas.setAttribute('height', 400);
        canvas.setAttribute('id', 'canvas');
        canvasDiv.appendChild(canvas);
        if(typeof G_vmlCanvasManager != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas);
        }
        context = canvas.getContext("2d");

        $('#canvas').bind('touchstart',function(event){
          var e = event.originalEvent;
          e.preventDefault();
          pulsado = true;
          movimientos.push([e.targetTouches[0].pageX - this.offsetLeft,
              e.targetTouches[0].pageY - this.offsetTop,
              false]);
          repinta();
        });

        $('#canvas').bind('touchmove',function(event){
          var e = event.originalEvent;
          e.preventDefault();
          if(pulsado){
              movimientos.push([e.targetTouches[0].pageX - this.offsetLeft,
                e.targetTouches[0].pageY - this.offsetTop,
                true]);
        repinta();
        }
    });
    
    $('#canvas').bind('touchend',function(event){
        var e = event.originalEvent;
        e.preventDefault();
        pulsado = false;
    });
    
    $('#canvas').mouseleave(function(e){
        pulsado = false;
    });
    repinta();
}

function repinta(){
canvas.width = canvas.width; // Limpia el lienzo

context.strokeStyle = "#0000a0";
context.lineJoin = "round";
context.lineWidth = 6;
for(var i=0; i < movimientos.length; i++)
{     
context.beginPath();
if(movimientos[i][2] && i){
    context.moveTo(movimientos[i-1][0], movimientos[i-1][1]);
    }else{
    context.moveTo(movimientos[i][0], movimientos[i][1]);
    }
    context.lineTo(movimientos[i][0], movimientos[i][1]);
    context.closePath();
    context.stroke();
}
}
</script>
</head>
<body style="background: #eee;" onload="initCanvas();">
<div id="canvasDiv" 
    style="width: 400px; height: 400px; background: #fff;"></div>
</body>
</html>
