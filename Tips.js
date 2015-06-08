//Javascript loop:
var data = [1,2,3,4,5,6,7,8,9]
for (var i = 0; i < data.length; i++) {
	console.log(data[i]);
};
//===============:
for (var i = 0, d; d = data[i]; i++) {
	console.log(d);
};

//Get a random item from an array
var items = [1, 3 , 12 , "a" , "548" , 'Đẹp trai' , 52, , 12 , "trai đẹp" , 11];
var  randomItem = items[Math.floor(Math.random() * items.length)];

//Get a random number in a specific range
var x = Math.floor(Math.random() * (max - min + 1)) + min;

//Append an array to another array
var array1 = [12 , "đẹp trai" , {name: "Phuong Vo"} , -123];
var array2 = [ "Đúng" , "Phuong Vo Dep Trai" , "100%"];
Array.prototype.push.apply(array1, array2);
//=>> array1 = 12 , "đẹp trai" , {name: "Phuong Vo"} , -123, "Đúng" , "Phuong Vo Dep Trai" , "100%"

