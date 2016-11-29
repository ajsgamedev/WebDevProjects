// localStorage.js

window.onload = initJS;

function initJS () {

$('#localStorageForm').click(formInfo);


}


function formInfo () {

	inKey = $('#frmkey').val();
	inValue = $('#frmval').val();
	inSubject = $('#frmsubject').val();
	inMessage = $('#frmmessage').val();

	console.log(inKey, inValue);

	if (localStorage.getItem(inKey) === null){

		localStorage.setItem(inKey, inValue);

		$('#message').html('Data Entered');
		$('#ekey').html(inKey);
		$('#evalue').html(localStorage.getItem(inKey));

	} else{
		$('#message').html('Key Error: no data entered');
	}


}

function simpleSetRetrieve () {

	localStorage.setItem('simpleName','This is some simple data');

	$('#lsData').attr('placeholder', localStorage.getItem('simpleName'));

}



var exObject = {

	getName: function (){
		return this.name;
	},

	setName: function (val){
		this.name = val;
	},

	getNumber: function (){
		return this.number;
	},

	setNumber: function (val){

		this.number = val;
	},
}

function showRetObj (obj) {

	console.log(obj);

	$('#objName').attr('placeholder', obj.name);
	$('#objNumber').attr('placeholder', obj.number);

}


// The function below is to reflect the contents of the javascript file back to the HTML Page
function reflectCode(){
	$.get('js/localStorage.js', function(data) {
	   $('#codeExample').text(data);
	}, 'text');
}