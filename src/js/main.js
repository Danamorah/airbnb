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
