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
$(function() {
  $('#pagination-short').materializePagination({
      align: 'center',
      lastPage:  4,
      firstPage:  1,
      useUrlParameter: false,
  }); 
  
  $('#pagination-long').materializePagination({
      align: 'center',
      lastPage:  10,
      firstPage:  1,
      useUrlParameter: false,
      onClickCallback: function(requestedPage){
          console.log('Requested page from #pagination-long: '+ requestedPage);
      }
  }); 
});