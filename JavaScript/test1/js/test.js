document.write('<h1>Driven by JavaScript</h1>');

var response = prompt('Please enter your name', '');
if (response != null && response != ''){
  console.log(response);
}

response = "<h2>" + response + "</h2>";

document.write(response);
