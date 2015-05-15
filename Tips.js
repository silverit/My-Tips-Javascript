//Javascript loop:
var data = [1,2,3,4,5,6,7,8,9]
for (var i = 0; i < data.length; i++) {
	console.log(data[i]);
};
//===============:
for (var i = 0, d; d = data[i]; i++) {
	console.log(d);
};