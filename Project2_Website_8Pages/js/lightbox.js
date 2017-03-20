//lightbox.js

$('document').ready(initJS);

function initJS(){
	$('.t-nail').click(showLarge);
	reflectCode();
}


function showLarge(){
	altText = $(this).attr('alt');
	image = $(this).attr('src');
	$('.modal-title').html(altText);
	$('#largeImage').attr('src', image);
	$('#ImageModal').modal({show:true})
}

// The function below is to reflect the contents of the javascript file back to the HTML Page
function reflectCode(){
	$.get('js/lightbox.js', function(data) {
	   $('#codeExample').text(data);
	}, 'text');
}