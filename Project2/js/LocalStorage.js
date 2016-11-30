// localStorage.js

window.onload = initJS;

function initJS () {

$('#localStorageForm').click(formInfo);


}


function formInfo () {

	inValue = $('#frmname').val();
	inEmail = $('#frmemail').val();
	inSubject = $('#frmsubject').val();
	inMessage = $('#frmmessage').val();

	//console.log(inKey, inValue);

	if (localStorage.getItem(inValue) === null){
			localStorage.setItem('Name', inValue);

		$('#message').html('Data Entered');

	} else{
		$('#message').html('Key Error: no data entered');
	}

	if (localStorage.getItem(inEmail) === null){
			localStorage.setItem('Email', inEmail);

		$('#message').html('Data Entered');

	} else{
		$('#message').html('Key Error: no data entered');
	}

	if (localStorage.getItem(inSubject) === null){
			localStorage.setItem('Subject', inSubject);

		$('#message').html('Data Entered');

	} else{
		$('#message').html('Key Error: no data entered');
	}


	if (localStorage.getItem(inMessage) === null){
			localStorage.setItem('Message', inMessage);

		$('#message').html('Data Entered');

	} else{
		$('#message').html('Key Error: no data entered');
	}

}
