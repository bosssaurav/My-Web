document.body.style.overflow = 'hidden';

jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

});



function typewriter(){
	var typeWriting = new TypeWriting({
	    targetElement   : document.getElementsByClassName('type-content')[0],
	    inputString     : 'Web Developer',
	    typing_interval : 150,
	    blink_interval  : '0.3s',
	    cursor_color    : '#16BAC5',
	}, function() {
	    type2();
	});

  function type2(){
  	typeWriting.rewrite( "CODER", function() {
      type3();
  	});
  }
  
  function type3(){
    typeWriting.rewrite( "Data Analyst", function() {
      type4();
    });
  }
  function type4(){
  	typeWriting.rewrite( "Geek!", function() {
      typewriter();
  	});
  }
}

typewriter();

if($(window).width() > 1023){

  $(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() > 170) {
    	$('.navbar-default .navbar-nav ').css({"margin":"0px -10% 0 0","-webkit-transition": "0.5s","-moz-transition": "0.5s","-o-transition": "0.5s"});
    	$('#getintouch-nav').css({"padding-right":"20px","-webkit-transition": "0.5s","-moz-transition": "0.5s","-o-transition": "0.5s"});
    }
    if ($(window).scrollTop() < 170) {
    	$('.navbar-default .navbar-nav ').css({"margin":"10px 0 0 0","-webkit-transition": "0.5s","-moz-transition": "0.5s","-o-transition": "0.5s"});
    	$('#getintouch-nav').css({"padding-right":"0px","-webkit-transition": "0.5s","-moz-transition": "0.5s","-o-transition": "0.5s"});
    }

 });
 });
}

if($(window).width() > 1400){

  $(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() > 170) {
    	$('.navbar-default .navbar-nav ').css({"margin":"10px -15% 0 0","-webkit-transition": "0.5s","-moz-transition": "0.5s","-o-transition": "0.5s"});
    	$('#getintouch-nav').css({"padding-right":"30px","-webkit-transition": "0.5s","-moz-transition": "0.5s","-o-transition": "0.5s"});
    }
    if ($(window).scrollTop() < 170) {
    	$('.navbar-default .navbar-nav ').css({"margin":"10px 0 0 0","-webkit-transition": "0.5s","-moz-transition": "0.5s","-o-transition": "0.5s"});
    	$('#getintouch-nav').css({"padding-right":"0px","-webkit-transition": "0.5s","-moz-transition": "0.5s","-o-transition": "0.5s"});
    }

 });
 });
}




$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});