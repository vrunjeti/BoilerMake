$(document).foundation();

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