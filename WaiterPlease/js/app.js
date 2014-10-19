$(document).foundation();

var ref = new Firebase("https://waiter-please.firebaseio.com");

var refuser = new Firebase("https://waiter-please.firebaseio.com/user/mosab");
var refuserFlavor = new Firebase("https://waiter-please.firebaseio.com/user/mosab/flavor");
var refuserTexture = new Firebase("https://waiter-please.firebaseio.com/user/mosab/texture");
var refuserAllergy = new Firebase("https://waiter-please.firebaseio.com/user/mosab/allergy");

var refrest = new Firebase("https://waiter-please.firebaseio.com/restaurant");

ref.on('value', function(dataSnapshot) {
	var data = dataSnapshot.val();

	console.log(data);

	var username = data.user.mosab;
	var restaurant = data.restaurant.WooChon;
	console.log(restaurant);
	var result = formula(username, restaurant.menu);

	var ubitter = (data.user.mosab.flavor.bitter);
});

var formula = function(username, menu){
	//list of user's allergies
	var uallergies = username.allergy;
	//list of user's flavors
	var uflavor = username.flavor;
	//user's healthy preference (not list)
	var uhealthy = username.healthy;

	//list of menu item flavor values
	var rflavor;
	//list of menu item healthy value

	var results = [];
console.log(menu);
	var i=-1;

// for(var key in menu)
// {
// 	i++;
// 	var rhealthy = Object.keys(menu).healthy; 							//check if item is healthy
// }
// var 
var results = [];

Object.keys(menu).forEach(function(menuitem)
{
	Object.keys(menuitem).forEach(function(properties){
	{
		Object.keys(properties).forEach()
	})
});

// 	for(var i = 0; i < Object.keys(menu).length; i++)								//iterate through each menu item
// 	{ 	
// 		console.log(i);

// 		var rhealthy = Object.keys(menu).healthy; 							//check if item is healthy
		
// 		console.log(rhealthy);
// 		if(uhealthy == 1 && rhealthy == 0)
// 		{
// 			results[i] = -1;	//set to exit value if not
// 			continue;		//move to next item
// 		} 											

// 		for(var j=0; j<uallergies.length; j++) 						//iterate through allergies
// 		{
// 			if(menu[i].contains[j] == 1 && uallergies[j] == 1) 		//check if the current item contains an allergen
// 			{	
// 				results[i] = -1;
// 				break;
// 			} 		
// 		}

// 		if (results[i] == -1) 										//go to the next menu item if the item had an allergen
// 			continue;

// 		var rflavor = menu[i].flavor;
		
// 		results[i] = 0;
// 		for (var k=0; k<rflavors.length; k++)
// 		{
// 			results[i] += rflavors[k]*uflavor[k];
// 			console.log(results[i]);

// 		}
// 	}
	
// 	var first = [0, 0];
// 	var second = [0, 0];
// 	var third = [0, 0];

// 	first[0] = results[0];
// 	second[0] = results[0];
// 	third[0] = results[0];

// 	for(var i=0; i<results.length; i++)
// 	{
// 		if(results[i] < third[0]){
// 			continue;
// 		} 
// 		if(results[i] > first[0]){
// 			third = second;
// 			second = first;
// 			first[0] = results[i];
// 			first[1] = i;
// 			continue;
// 		}
// 		if(results[i] > second[0]){
// 			third = second;
// 			second[0] = results[i];
// 			second[1] = i;
// 			continue;
// 		}
// 		if(results[i] > second[0]){
// 			third[0] = results[i];
// 			third[1] = i;
// 		}
// 	}
// 	return [first[1],second[1],third[1]];
// }

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

$(' .button').click(function(){
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