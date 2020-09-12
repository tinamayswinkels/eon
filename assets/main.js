

$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();

	});
	// end hamburger menu


	// This is the pop-up gallery
	$('[data-fancybox="gallery"]').fancybox({
		protect: true,
		keyboard: true,
		arrows: true,
		infobar: false,
		buttons: [
    "close"
	  ],
	});

	// Slick Slider
	$('.slick-video-loop').slick({
		autoplay: false
	});

	// Slick Slider
	$('.slick-block-loop').slick({
		autoplay: false
	});


});


// Animate on Scroll

$(function() {
	AOS.init({
		delay: 100,
		offset: 100,
		mirror: true,
		duration: 1000

	});

	window.addEventListener('load', AOS.refresh);



// filterable gallery

	// Daniel's new code
	var initial = location.search.replace("?","");

	// alert(initial)

	 if (initial != "" ) {
	  $('.portfolio .portfolio-item').each(function() {
	        if(initial == 'all'){
						$(this).removeClass('hidden');
	        }else{
	          if(!$(this).hasClass(initial)) {
	            $(this).addClass('hidden'); // hide those that don't have the filter
	          }else{
	            $(this).removeClass('hidden'); // show those that do have the filter
	          }
	        };
	    });
		};


  $('nav#portfolio-filter a').click(function(e){
    e.preventDefault();

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('nav#portfolio-filter .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().replace(' ','-').toLowerCase();

    $('.portfolio .portfolio-item').each(function() {
        if(filterVal == 'all'){
          $(this).removeClass('hidden');
        }else{
          if(!$(this).hasClass(filterVal)) {
            $(this).addClass('hidden'); // hide those that don't have the filter
          }else{
            $(this).removeClass('hidden'); // show those that do have the filter
          }
					};
        });

});

// Homepage hover gallery


  $('nav#hover-links a').mouseenter(function(e){
    e.preventDefault();

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('nav#hover-links .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().replace(' ','-').toLowerCase();

    $('.hover-image').each(function() {
          if(!$(this).hasClass(filterVal)) {
            $(this).addClass('hidden'); // hide those that don't have the filter
          }else{
            $(this).removeClass('hidden'); // show those that do have the filter
          }
        });

});

}); // End document ready


// End JQuery, add vanilla javascript
