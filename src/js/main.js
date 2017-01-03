$(document).ready(function(){
	$('.carousel').carousel();
});

$(document).ready(function(){
	$('.slider').slider({full_width: true});
});

/**inicio js filtros avanzados*/
$(document).ready(function(){
	$('.collapsible').collapsible();
});

$(document).ready(function(){
	$('.btn-filtros').on("click", function(){
		$('#filtro-anvanced').show();
	});
});

$(document).ready(function(){
	$('.btn-cancelar').on("click", function(){
		$('#filtro-anvanced').hide();
	});
});
/**fin js filtros avanzados*/