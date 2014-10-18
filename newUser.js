// we would probably save a profile when we register new users on our site
// we could also read the profile to see if it's null
// here we will just simulate this with an isNewUser boolean

var ref = new Firebase("https://waiter-please.firebaseio.com");
var refuser = new Firebase("https://waiter-please.firebaseio.com/user/mosab");
var refrest = new Firebase("https://waiter-please.firebaseio.com/restaurant");



/*
var isNewUser = true;

ref.onAuth(function(authData) {
  if (authData && isNewUser) {
    // save the user's profile into Firebase so we can
    // list users, use them in security rules, and show profiles
    ref.child('user').child(authData.uid).set(authData);
  }


});
*/

if ($("#spicy").prop( "checked" ))
	refuser.flavor.spicy.update(3);

if ($("#sweet").prop( "checked" ))
	refuser.flavor.sweet.update(3);

if ($("#sour").prop( "checked" ))
	refuser.flavor.sour.update(3);

if ($("#salty").prop( "checked" ))
	refuser.flavor.salty.update(3);

if ($("#bitter").prop( "checked" ))
	refuser.flavor.bitter.update(3);

if ($("#fruity").prop( "checked" ))
	refuser.flavor.fruity.update(3);

if ($("#tart").prop( "checked" ))
	refuser.flavor.tart.update(3);

if ($("#buttery").prop( "checked" ))
	refuser.flavor.buttery.update(3);

if ($("#pickled").prop( "checked" ))
	refuser.flavor.pickled.update(3);

if ($("#unseasoned").prop( "checked" ))
	refuser.flavor.unseasoned.update(3);



