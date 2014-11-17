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

	var result = formula(username, restaurant.menu);

	var filteredresult = filteredformula(username, restaurant.menu);	//for use with texture option
	
	var ubitter = (data.user.mosab.flavor.bitter);
});

var formula = function(username, menu){
	//var uname = new Firebase(username);
	//var uhealthy;
	// username.on('value', function(snapshot){
	// 	var newPost = snapshot.val();
	// 	uhealthy = newPost.healthy;
	// });

	// uname.on('value', function (snapshot) {
	//   console.log(snapshot.val());

	// }, function (errorObject) {
	//   console.log('The read failed: ' + errorObject.code);
	// });

	// var uhealthy;

	// for(var property in username){
	// 	if(username.hasOwnProperty(property)){
	// 		uhealthy = username.property;
	// 	}
	// }

	// console.log(uhealthy);

	//var uhealthy = username.child('healthy');

	var uhealthy = username.child.value;

	console.log(uhealthy);

	var uallergies = [];	//list of user's allergies

	var index = -1;
	Object.keys(username.allergy).forEach(function(allergen){
		index++;
		uallergies[index] = username.allergy[allergen];
	});


	var uflavor = [];	//list of user's flavors

	index = -1;
	Object.keys(username.flavor).forEach(function(flava){
		index++;
		uflavor[index] = username.flavor[flava];
	});

	// console.log(uflavor);

	var results = [];

	//flavor foor loop	
	var itemindex=0;		//index of the menu item
	var flavorindex=0;	//index for summing flavors

	Object.keys(menu).forEach(function(menuitem){
		results[itemindex] = 0;
		Object.keys(menu[menuitem]).forEach(function(properties){
			var itemobject = menu[menuitem];
			Object.keys(itemobject[properties]).forEach(function(keys){
				keyobject = itemobject[properties][keys];
				if(properties == "flavor")
				{
					results[itemindex] += uflavor[flavorindex]*keyobject;
					flavorindex++;
				}
			});
			flavorindex =0;
		});
		itemindex++;
	});
		console.log("Initial: "+ results);

	//allergy for loop	
	itemindex=0;		//index of the menu item
	var allergyindex=0;	//index for summing flavors

	Object.keys(menu).forEach(function(menuitem){
		Object.keys(menu[menuitem]).forEach(function(properties){
			var itemobject = menu[menuitem];
			Object.keys(itemobject[properties]).forEach(function(keys){
				keyobject = itemobject[properties][keys];
				if(properties == "contains")
				{
					if(uallergies[allergyindex] == 1 && keyobject == 1)
						results[itemindex] = 0;
					allergyindex++;
				}
			});
			allergyindex =0;
		});
		itemindex++;
	});

		console.log("allergy: "+ results);

	//allergy for loop	
	itemindex=0;		//index of the menu item

	Object.keys(menu).forEach(function(menuitem){
		Object.keys(menu[menuitem]).forEach(function(properties){
			var itemobject = menu[menuitem];
			Object.keys(itemobject[properties]).forEach(function(keys){
				keyobject = itemobject[properties][keys];
				if(properties == "healthy")
				{
					if(uhealthy == 1 && keyobject === 0)
						results[itemindex] = 0;
				}
			});
		});
		itemindex++;
	});

		console.log("healthy: "+ results);

	//get first, second, third
	var finalresult = [];

	//initialize final array
	finalresult[0] = 0;
	finalresult[1] = 0;
	finalresult[2] = 0;

	// for(var i=0; i<results.length; i++)
	// {
	// 	if(results[i] < finalresult[2])
	// 		continue;
	// 	else if(results[i] > finalresult[0])
	// 	{
	// 		finalresult[2] = finalresult[1];
	// 		finalresult[1] = finalresult[0];
	// 		finalresult[0] = i;
	// 	}
	// 	else if(results[i] > finalresult[1])
	// 	{
	// 		finalresult[2] = finalresult[1];
	// 		finalresult[1] = i;
	// 	}
	// 	else if(results[i] > finalresult[2])
	// 	{
	// 		finalresult[2] = i;
	// 	}
	// }
	console.log(finalresult);
	return finalresult;
}

var filteredformula = function(username, menu){
	var uhealthy = username.healthy.value;

	var uallergies = [];	//list of user's allergies

	var index = -1;
	Object.keys(username.allergy).forEach(function(allergen){
		index++;
		uallergies[index] = username.allergy[allergen];
	});


	var uflavor = [];	//list of user's flavors

	index = -1;
	Object.keys(username.flavor).forEach(function(flava){
		index++;
		uflavor[index] = username.flavor[flava];
	});

	// console.log(uflavor);

	index = -1;
	Object.keys(username.flavor).forEach(function(flava){
		index++;
		uflavor[index] = username.flavor[flava];
	});

	var results = [];

	//flavor foor loop	
	var itemindex=0;		//index of the menu item
	var flavorindex=0;	//index for summing flavors

	Object.keys(menu).forEach(function(menuitem){
		results[itemindex] = 0;
		Object.keys(menu[menuitem]).forEach(function(properties){
			var itemobject = menu[menuitem];
			Object.keys(itemobject[properties]).forEach(function(keys){
				keyobject = itemobject[properties][keys];
				if(properties == "flavor")
				{
					results[itemindex] += uflavor[flavorindex]*keyobject;
					flavorindex++;
				}
			});
			flavorindex =0;
		});
		itemindex++;
	});
		console.log("Initial: "+ results);

	//allergy for loop	
	itemindex=0;		//index of the menu item
	var allergyindex=0;	//index for summing flavors

	Object.keys(menu).forEach(function(menuitem){
		Object.keys(menu[menuitem]).forEach(function(properties){
			var itemobject = menu[menuitem];
			Object.keys(itemobject[properties]).forEach(function(keys){
				keyobject = itemobject[properties][keys];
				if(properties == "contains")
				{
					if(uallergies[allergyindex] == 1 && keyobject == 1)
						results[itemindex] = 0;
					allergyindex++;
				}
			});
			allergyindex =0;
		});
		itemindex++;
	});

		console.log("allergy: "+ results);

	//allergy for loop	
	itemindex=0;		//index of the menu item

	Object.keys(menu).forEach(function(menuitem){
		Object.keys(menu[menuitem]).forEach(function(properties){
			var itemobject = menu[menuitem];
			Object.keys(itemobject[properties]).forEach(function(keys){
				keyobject = itemobject[properties][keys];
				if(properties == "healthy")
				{
					if(uhealthy == 1 && keyobject === 0)
						results[itemindex] = 0;
				}
			});
		});
		itemindex++;
	});

		console.log("healthy: "+ results);

	//get first, second, third
	var finalresult = [];

	//initialize final array
	finalresult[0] = 0;
	finalresult[1] = 0;
	finalresult[2] = 0;

	for(var i=0; i<results.length; i++)
	{
		if(results[i] < finalresult[2])
			continue;
		else if(results[i] > finalresult[0])
		{
			finalresult[2] = finalresult[1];
			finalresult[1] = finalresult[0];
			finalresult[0] = i;
		}
		else if(results[i] > finalresult[1])
		{
			finalresult[2] = finalresult[1];
			finalresult[1] = i;
		}
		else if(results[i] > finalresult[2])
		{
			finalresult[2] = i;
		}
	}
	console.log(finalresult);
}

var lat = 0;
var lon = 0;

function success(pos){
	//var coords = pos.coords;
	lat = pos.latitude;
	lon = pos.longitude;
}

//alert("lat = " + lat + " lon = " + lon);

var position = navigator.geolocation.getCurrentPosition(success);
//console.log(position);

$('#introgo').click(function(){
	//$('.homepage').addClass('hide');
	$('.homepage').fadeOut(400, function(){$('.prefflavors').fadeIn()});
	//window.setTimeout($('.prefflavors').fadeIn(), 400);
	//$('.prefflavors').removeClass('hide');
	//$('.prefflavors').fadeIn();
});

function updateFlavor(fl){
	if($('#' + fl).hasClass('active')){
		refuser.child('flavor').child(fl).set(0);
	}
	else {
		refuser.child('flavor').child(fl).set(5);
	}
}

function updateAllergy(al){
	if($('#' + al).hasClass('active')){
		refuser.child('allergy').child(al).set(0);
	}
	else {
		refuser.child('allergy').child(al).set(1);
	}
}

function updateHealthy(hl){
	if(hl == 1){
		refuser.child('healthy').child('value').set(1);
	}
	else {
		refuser.child('healthy').child('value').set(0);
	}
}

$('#flavorsnext').click(function(){
	$('.prefflavors').fadeOut(400, function(){$('.prefallergies').fadeIn()});
	//if buttons are active, set those to fb
});

$('#allergiesnext').click(function(){
	$('.prefallergies').fadeOut(400, function(){$('.health').fadeIn()});
});

$('#healthnext').click(function(){
	$('.health').fadeOut(400, function(){$('.location').fadeIn()});
});

// var restaurantList = document.getElementByClassName("location");
// //var restaurantList = $('.location');
// for(var )
// restaurantList.getElementsByTagName("P")[i].innerHTML;

// var restaurantName = "";

// if($('.location #' + ).hasClass('active')) restaurantName = 

var restaurantName = "WooChon";
$('#welc').append(restaurantName + "!");

$('#locationnext').click(function(){
	$('.location').fadeOut(400, function(){$('.welcome').fadeIn()});
});

function auto () {
	var wooChonMenu = refrest.child('WooChon').child('menu');
	//var results = formula(refuser,wooChonMenu);
	// console.log("first choice: " + wooChonMenu + "/1");
	// var firstChoice = wooChonMenu.result[0];
	// var secondChoice = wooChonMenu(result[1]);
	// var thirdChoice = wooChonMenu(result[2]);

	// wooChonMenu.on('value', function (snapshot) {
	//   console.log(snapshot.val());
	// }, function (errorObject) {
	//   console.log('The read failed: ' + errorObject.code);
	// });

	// wooChonMenu.on('value', function (snapshot) {
	//   var newPost = snapshot.val();
	//   console.log("Author: " + newPost.author);
	//   console.log("Title: " + newPost.title);
	// });
	//firstChoice = results[0];
	var firstChoice = "Sul Lang Tang";
	var secondChoice = "Taro Gook Bap";
	var thirdChoice = "Yook Jae Jang";
	$('#firstChoice').append(firstChoice);
	$('#secondChoice').append(secondChoice);
	$('#thirdChoice').append(thirdChoice);

	$('#welcomenext').click(function(){
		$('.welcome').fadeOut(400, function(){$('.result').fadeIn()});
	});
}

function detailed(){

	var firstChoice = "Gal Bi Tang";
	var secondChoice = "Duk Mandoo Gook";
	var thirdChoice = "Dol Sot Bi Bim Bap";
	$('#firstChoice').append(firstChoice);
	$('#secondChoice').append(secondChoice);
	$('#thirdChoice').append(thirdChoice);

	$('#welcomenext').click(function(){
		$('.welcome').fadeOut(400, function(){$('.rest1').fadeIn()});
	});
}

$('#rest1next').click(function(){
	$('.rest1').fadeOut(400, function(){$('.rest2').fadeIn()});
});

$('#rest2next').click(function(){
	$('.rest2').fadeOut(400, function(){$('.rest3').fadeIn()});
});

$('#rest3next').click(function(){
	$('.rest3').fadeOut(400, function(){$('.result').fadeIn()});
});

$('#resultnext').click(function(){
	$('.result').fadeOut(400, function(){$('.fin').fadeIn()});
});

$(' .button').click(function(){
	if(!$(this).hasClass('active')){
		$(this).addClass('active');
	}
	else {
		$(this).removeClass('active');
	}
});

//var braintree = Braintree.create('MIIBCgKCAQEAyBNQj5ew/K8fDa0FcTo4xZzEX+cDgmjQTscsfrWv81heC57PbOTl4c+cwoVnySQLKjKpChUBxurkkHz9TzIxLn8e+kdJn2ZeG9ljfNzCqvUcXihFCMZ5ZAFX9O4lEYu5hp16387EgnjCl3+XYyG8NYrydaB2BTGJbfYSFUvCD+rdd3cwJMxC38pLNE+yrBwOiTwPjn+7dNkKnur9Hq6dTaZ+cKLLr7JNUnXRjWTyyz3ec9vXdFwlrvB43Ey6PsuBU1ZZq0dEsdP0aPzHl3nk5ZHkZEBz2hIsbTaX2AYGLuFUMnQObgDhXPZRvl2xGm7paEF4fC5bMR8iBMsyx8Lx3wIDAQAB');
