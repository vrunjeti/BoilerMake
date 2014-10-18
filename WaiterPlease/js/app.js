$(document).foundation();

$('#introgo').click(function(){
	//$('.homepage').addClass('hide');
	$('.homepage').fadeOut(400, function(){$('.prefflavors').fadeIn()});
	//window.setTimeout($('.prefflavors').fadeIn(), 400);
	//$('.prefflavors').removeClass('hide');
	//$('.prefflavors').fadeIn();
});

$('#flavorsnext').click(function(){
	$('.prefflavors').fadeOut(400, function(){$('.prefallergies').fadeIn()});
	//$('.prefflavors').addClass('hide');
	//$('.prefallergies').removeClass('hide');
});

$('#allergiesnext').click(function(){
	$('.prefallergies').fadeOut(400, function(){$('.location').fadeIn()});
	//$('.prefallergies').addClass('hide');
	//$('.location').removeClass('hide');
});

$('.prefflavors .button').click(function(){
	//alert($(this).css('background-color'));
	if(!$(this).hasClass('active')){
		$(this).addClass('active');
		//alert($(this).css('background-color'));
	}
	else {
		$(this).removeClass('active');
	}
});

$('.prefallergies .button').click(function(){
	//alert($(this).css('background-color'));
	if(!$(this).hasClass('active')){
		$(this).addClass('active');
		//alert($(this).css('background-color'));
	}
	else {
		$(this).removeClass('active');
	}
});