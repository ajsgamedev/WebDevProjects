function myLoop(count){
	b = 'Global from Function!';
	var c = 0;
	console.log(c);
	for (var i = count; i > 0; i--){
		console.log(c);
		c += i;
	}
	return c;
};
var a = 'Global-a';
var d = myLoop(5);
console.log(a);
console.log(b);
console.log(d); // changed order as c will break script
//console.log(c);
