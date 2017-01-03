$(document).ready(function(){
	$('.carousel').carousel();
	$('.slider').slider({full_width: true});
	$('.collapsible').collapsible();
	$('.btn-filtros').on("click", function(){
		$('#filtro-anvanced').show();
	});
	$('.btn-cancelar').on("click", function(){
		$('#filtro-anvanced').hide();
	});
});
/**fin js filtros avanzados*/
