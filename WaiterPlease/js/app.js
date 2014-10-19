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