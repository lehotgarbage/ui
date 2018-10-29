$( document ).ready(function() {
	"use strict";
	
$( "head" ).prepend( "<link rel='stylesheet' type='text/css' href='https://cdn.jsdelivr.net/gh/lehotgarbage/ui@ca012244a0172b0a73b2169be3579e44f61fc706/css/overlayStyle.css'/>"); 
	
	// css link in <head>
	
$( "body" ).prepend( "<div class='overlayContainer'></div>" );
	
	// insert overlayContainer
	
$( ".overlayContainer" ).prepend( "<button class='triggerContainer'></button>" );
	
$( ".overlayContainer" ).prepend( "<div class='menuContainer fade-out'></div>" );
	
$( ".menuContainer" ).prepend( "<button class='uiButton1 button-out'></div>" );
$( ".menuContainer" ).prepend( "<button class='uiButton2 button-out'></div>" );
$( ".menuContainer" ).prepend( "<button class='uiButton3 button-out'></div>" );
	
$( ".menuContainer" ).prepend( "<div class='paneContainer1 pane-out'></div>" );
$( ".menuContainer" ).prepend( "<div class='paneContainer2 pane-out'></div>" );
$( ".menuContainer" ).prepend( "<div class='paneContainer3 pane-out'></div>" );
	
	});


$(document).ready(function(){
	"use strict";
$('.triggerContainer').click(function(){
  $('.menuContainer').toggleClass('fade-in fade-out');
  $('.uiButton1').toggleClass('button-in button-out');
  $('.uiButton2').toggleClass('button-in button-out');
  $('.uiButton3').toggleClass('button-in button-out');
  if ($('.paneContainer1').hasClass( 'pane-in' )) {
      $('.paneContainer1').toggleClass('pane-in pane-out');
      } else {}
  if ($('.paneContainer2').hasClass( 'pane-in' )) {
      $('.paneContainer2').toggleClass('pane-in pane-out');
      } else {}
  if ($('.paneContainer3').hasClass( 'pane-in' )) {
      $('.paneContainer3').toggleClass('pane-in pane-out');
      } else {}
     });
	});




$(document).ready(function(){
	"use strict";
$('.uiButton1').click(function(){
  $('.paneContainer1').toggleClass('pane-in pane-out');
  if ($('.paneContainer2').hasClass( 'pane-in' )) {
      $('.paneContainer2').toggleClass('pane-in pane-out');
} else {}
  if ($('.paneContainer3').hasClass( 'pane-in' )) {
      $('.paneContainer3').toggleClass('pane-in pane-out');
} else {}
	
});
	});


$(document).ready(function(){
	"use strict";
$('.uiButton2').click(function(){
  $('.paneContainer2').toggleClass('pane-in pane-out');
  if ($('.paneContainer1').hasClass( 'pane-in' )) {
      $('.paneContainer1').toggleClass('pane-in pane-out');
} else {}
  if ($('.paneContainer3').hasClass( 'pane-in' )) {
      $('.paneContainer3').toggleClass('pane-in pane-out');
} else {}
	
});
	});


$(document).ready(function(){
	"use strict";
$('.uiButton3').click(function(){
  $('.paneContainer3').toggleClass('pane-in pane-out');
  if ($('.paneContainer1').hasClass( 'pane-in' )) {
      $('.paneContainer1').toggleClass('pane-in pane-out');
} else {}
  if ($('.paneContainer2').hasClass( 'pane-in' )) {
      $('.paneContainer2').toggleClass('pane-in pane-out');
} else {}
	
});
	});
