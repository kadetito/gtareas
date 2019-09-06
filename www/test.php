
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title></title>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="robots" content="noindex, nofollow">
  <meta name="googlebot" content="noindex, nofollow">
  <meta name="viewport" content="width=device-width, initial-scale=1">





     <script src='js/jquery-2.2.4.min.js'></script> 

      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.2/moment.min.js"></script>
   <script src="js/bootstrap.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.43/js/bootstrap-datetimepicker.min.js"></script>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.43/css/bootstrap-datetimepicker.min.css">
      <link rel="stylesheet" type="text/css" href="maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">




  <!-- TODO: Missing CoffeeScript 2 -->

  <script type="text/javascript">//<![CDATA[

    window.onload=function(){
      
$(document).ready(function() {
    $('#datetimepicker').datetimepicker({
        inline: true,
        format: 'DD/MM/YYYY'
    });

    $('div tbody').on('click', 'tr > .day',function(){
    	alert($(this).data().day)
    })
});

    }

  //]]></script>

</head>
<body>
    <body>
	<div style="overflow:hidden;">
    <div class="form-group">
        <div class="row">
            <div class="col-md-8">
                <div id="datetimepicker"></div>
            </div>
        </div>
    </div>
  </div>
</body>

  

</body>
</html>
