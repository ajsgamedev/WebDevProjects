// JavaScript file to demonstrate JavaScript Cookie creation and retreival.

console.log('Running up JS');

window.onload = init;

function init () {
	console.log('Running Init');

	showInitialVals();

	addEvent(document.getElementById('subButton'), 'click', formToCookie);

	incrementVisitCount();

}

function setCookie (cookieKey, cookieValue, lifeSpan, path) {
	// Default constructor for creating a cookie.  Cookies can be simple key-value pairs, or we can add
	// some more detail, such as an expiry date, and the URL to which it applies.  This function
	// requires a value for the Cookie Key, the Cookie Value, time in months to expiry, and the URL to
	// which it applies.  The full text to be supplied is of the form:
	//                           SOMEKEY=SOMEVALUE;path=SOMEPATH;expires=SOMEDATE 

	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+lifeSpan);
	var path = ';path=' + path + ';expires=';
	
	document.cookie = cookieKey + '=' + cookieValue + ';path=/;expires=' + expireDate.toGMTString();

}


function getCookie (cookieKey) {
	
	// a cookie is really just a string with some rules on how it is to be constructed
	// so in order to test for the existence of a cookie, and/or retrive its value we 
	// need to look at some string manipulation.  The code below is adapted from W3Schools
	
	// first the existance of the cookie is checked; if the cookie does not exist, null is returned
	// As the cookie is really just a string, we simply need to select the part of the string that we
	// are interested in, by using substring, and return that.
	// to do this we need to use the substring method, which will return a string, dependent on the 
	// values for start and end.   
	
	var cookieValue = null;
	var myCookie = document.cookie;
	var subStrStart = myCookie.indexOf(" " + cookieKey + "=");
	// the above line will determine where the cookieKey value is in the cookie strings

	if (subStrStart == -1) {
		subStrStart = myCookie.indexOf(cookieKey + "=");
		// this is a second try at finding the key value by removing the blank at the start

	}

	if (subStrStart == -1) {
	    cookieValue = null;
	    console.error('Cookie Key not found!')
	  // if the key does not exist, return null
	} else {
	  	subStrStart = myCookie.indexOf("=", subStrStart) + 1;
	  	var subStrEnd = myCookie.indexOf(";", subStrStart);
	  	if (subStrEnd == -1) { 
			subStrEnd = myCookie.length;
		}
		cookieValue = unescape(myCookie.substring(subStrStart,subStrEnd));
	}
	console.log('Recovered Cookie Value is: '  + cookieValue);
	return cookieValue;
}


function formToCookie () {
	// First we get the form values from the HTML

	var parentDiv = document.getElementById('cookieVals');	
	var name = document.getElementById('name').value;
	var email = document.cookieForm.email.value;  // note that there are two ways to ref form items.

	setCookie('name', name, 12, '/');
	setCookie('email', email, 12, '/');

    var pName = document.createElement('p');
    pName.className = 'attachedClass';
	pName.id = 'attachedCookieEmailID';
    var t = document.createTextNode('Entered Name value is: ' + name + '.');
    pName.appendChild(t);

    var pEmail = document.createElement('p');
    pEmail.className = 'attachedClass';
	pEmail.id = 'attachedCookieEmailID';
    var t = document.createTextNode('Entered Email value is: ' + email + '.');
    pEmail.appendChild(t);

	parentDiv.appendChild(pName);
	parentDiv.appendChild(pEmail);

}

function incrementVisitCount () {
// first check to see if the user has been to site before by checking the
// cookie value.  If it is the first visit, then creat a cookie and 
// send message to paeg; else increment the number of visits and send message
// to page
	var numVisits = 0; // initalise variable
	var parentDiv = document.getElementById('cookieVals');	


	if (getCookie('visitCount') === null){
		setCookie('visitCount', '0', 12, '/')
		var p = document.createElement('p');
		p.className = 'attachedClass';
		p.id = 'attachedID'
	    var t = document.createTextNode('This is your first visit to this site.');
	    p.appendChild(t);
	} else {
		numVisits = getCookie('visitCount');
		numVisits ++;
		setCookie('visitCount', numVisits, 12, '/')			
	    var p = document.createElement('p');
	    p.className = 'attachedClass';
		p.id = 'attachedID';
	    var t = document.createTextNode('You have been here ' + numVisits +' times before.');
	    p.appendChild(t);

	}

	parentDiv.insertBefore(p, parentDiv.childNodes[2]);

	console.log(p);

}



function showInitialVals () {
	
	var parentDiv = document.getElementById('cookieVals');	


	if (getCookie('name') === null) {
		var pName = document.createElement('p');
		pName.className = 'attachedClass';
		pName.id = 'attachedCookeNameID'
	    var t = document.createTextNode('No Previous Name Cookie');
	    pName.appendChild(t);

	} else {
		var cookieName = getCookie('name');
	    var pName = document.createElement('p');
	    pName.className = 'attachedClass';
		pName.id = 'attachedCookieEmailID';
	    var t = document.createTextNode('Cookie Name value is: ' + cookieName + '.');
	    pName.appendChild(t);

	} 

	if (getCookie('email') === null) {
		var pEmail = document.createElement('p');
		pEmail.className = 'attachedClass';
		pEmail.id = 'attachedCookeNameID'
	    var t = document.createTextNode('No Previous Email Cookie');
	    pEmail.appendChild(t);

	} else {
		var cookieEmail = getCookie('email');
	    var pEmail = document.createElement('p');
	    pEmail.className = 'attachedClass';
		pEmail.id = 'attachedCookieEmailID';
	    var t = document.createTextNode('Cookie Email value is: ' + cookieEmail + '.');
	    pEmail.appendChild(t);

	} 

	parentDiv.insertBefore(pName, parentDiv.childNodes[4]);
	parentDiv.insertBefore(pEmail, parentDiv.childNodes[5]);

}


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
    console.error("Element " + obj + " not found"); 
  }
}



