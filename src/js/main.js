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
<<<<<<< HEAD

// JS YENNY
// SELECT 

 $(document).ready(function() {
    $('select').material_select();
 });

//DATE PICKER  
       
 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
 });

 //TOOLTIPS
 $(".tooltip").hover(function(){
    $('.tooltiptext').css("display", "block");
    }, function(){
 	$('.tooltiptext').css("display", "none");
});

//RANGE PRICE 

$('#flat-slider').slider({
  orientation: 'horizontal',
  range:       true,
  values:      [5.000,50.000]
});

//FIN JS YENNY

=======
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
>>>>>>> 599eaf38b2b616d23a5745b2d5a1a4fa9d2371ca
