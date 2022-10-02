const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  
    $("#enviarCorreo").click(function () {
      alert("El correo fue enviado correctamente...");
    });
  
    $(".title-prep").dblclick(function () {
      $(this).css("color", "red");
    });
  
    $(".card-title").click(function () {
      $(".card-text").toggle("fast");
    });
  });

  var ingredientes = $( ".ingredientes" )

  ingredientes.on( "dblclick", function() {
    $(".ingredientes").css({"color": "red"} );
  });

  $( ".preparacion" ).on( "dblclick", function() {
     $(".preparacion").css({"color": "red"}) ;
  });