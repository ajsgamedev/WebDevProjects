// JavaScript file to demonstrate JavaScript Cookie creation and retreival.

window.onload = init;

function init () {
	console.log('Running Init')

	addEvent(document.getElementById('subButton'), 'click', processForm);
	addEvent(document.getElementById('pullCookie'), 'click', pullCookieData);


	var userName ="";

	if (document.cookie != ""){
		userName = document.cookie.split("=")[1];
	}

	console.log(userName);
	document.getElementById('cookieuserName').innerHTML = userName;
	document.getElementById('cookieEmail').value = userName;

}

function processForm(){

	console.log('Processing Form');
	document.getElementById('outName').innerHTML =  document.getElementById('name').value
	document.getElementById('outEmail').innerHTML =  document.getElementById('userEmail').value

	var expireDate = new Date();

	expireDate.setMonth(expireDate.getMonth()+12);

	setCookie('name',document.getElementById('name').value, '/', expireDate.toGMTString());
	setCookie('email',document.getElementById('userEmail').value, '/', expireDate.toGMTString());

}

function pullCookieData(){

	console.log('Pulling Cookie Data');
	document.getElementById('cookieuserName').innerHTML =  getCookie('name');
	document.getElementById('cookieEmail').innerHTML =  getCookie('email');

}


function setCookie (name, value, path, expireDate) {
	// Default constructor for creating a cookie.  Cookies can be simple key-value pairs, or we can add
	// some more detail, such as an expiry date, and the URL to which it applies.  This function
	// requires a value for the Cookie Key, the Cookie Value, time in months to expiry, and the URL to
	// which it applies.  The full text to be supplied is of the form:
	//                           SOMEKEY=SOMEVALUE;path=SOMEPATH;expires=SOMEDATE 

	console.log('setting cookie')
	document.cookie = name +'=' + value + ';path=' + path + ';expires=' + expireDate;

}


function getCookie(c_name){

	// a cookie is really just a string with some rules on how it is to be constructed
	// so in order to test for the existence of a cookie, and/or retrive its value we 
	// need to look at some string manipulation.  The code below is adapted from W3Schools
	
	// first the existance of the cookie is checked; if the cookie does not exist, null is returned
	// As the cookie is really just a string, we simply need to select the part of the string that we
	// are interested in, by using substring, and return that.
	// to do this we need to use the substring method, which will return a string, dependent on the 
	// values for start and end.   

	console.log('getting cookie')

		var c_value = document.cookie;
		var c_start = c_value.indexOf(" " + c_name + "=");
		if (c_start == -1)
		  {
		  c_start = c_value.indexOf(c_name + "=");
		  }
		if (c_start == -1)
		  {
		  c_value = null;
		  }
		else
		  {
		  c_start = c_value.indexOf("=", c_start) + 1;
		  var c_end = c_value.indexOf(";", c_start);
		  if (c_end == -1)
		  {
		c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start,c_end));
		}
		return c_value;

}

// Some code from a previous example to attach the event handler to the button 

function addEvent (obj, listener, handler) {
	if (obj){
		if (obj.addEventListener){
			obj.addEventListener(listener, handler, false);
			console.log("Added Event Listener to " + obj );
		}
		else if (obj.attachEvent){
			obj.attachEvent("on" + listener, handler);
			console.log("Attached Event - Old IE");
		}
	}
	else {
		console.log("Element " + obj + " not found");	
	}
}

