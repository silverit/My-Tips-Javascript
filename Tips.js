//Javascript loop:
var data = [1,2,3,4,5,6,7,8,9]
for (var i = 0; i < data.length; i++) {
	console.log(data[i]);
};
for (var i = 0, d; d = data[i]; i++) {
	console.log(d);
};

//Get a random item from an array
var items = [1, 3 , 12 , "a" , "548" , 'Đẹp trai' , 52, , 12 , "trai đẹp" , 11];
var  randomItem = items[Math.floor(Math.random() * items.length)];

//Random số trong phạm vi min max.
var x = Math.floor(Math.random() * (max - min + 1)) + min;

//Thêm array vào array
var array1 = [12 , "đẹp trai" , {name: "Phuong Vo"} , -123];
var array2 = [ "Đúng" , "Phuong Vo Dep Trai" , "100%"];
Array.prototype.push.apply(array1, array2);
//=>> array1 = 12 , "đẹp trai" , {name: "Phuong Vo"} , -123, "Đúng" , "Phuong Vo Dep Trai" , "100%"
 
 // Kiểm tra có phải số không
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Giá trị lớn nhất, nhỏ nhất của một mảng
var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);


// Rỗng mảng
var myArray = [12 , 222 , 1000 ];  
myArray.length = 0; // myArray will be equal to [].

// Không sử dụng delete cho array
var items = [12, 548 ,'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' ,2154 , 119 ]; 
items.length; // return 11 
delete items[3]; // return true 
items.length; // return 11 
/* Bị undefined như này: [12, 548, "a", undefined × 1, 5478, "foo", 8852, undefined × 1, "Doe", 2154, 119]   */

var items = [12, 548 ,'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' ,2154 , 119 ]; 
items.length; // return 11 
items.splice(3,1) ; 
items.length; // return 10 
/* Giá trị trả về như mong muốn [12, 548, "a", 5478, "foo", 8852, "Doe", 2154, 119]   */

//Lấy một phần mảng từ đầu của mảng - bỏ giá trị phía sau.
var myArray = [12 , 222 , 1000 , 124 , 98 , 10 ];  
myArray.length = 4; // Trả về [12 , 222 , 1000 , 124].

//Sử dụng logic OR AND để làm điều kiện if
var foo = 10;  
foo == 10 && doSomething(); // if (foo == 10) doSomething(); 
foo == 5 || doSomething(); // if (foo != 5) doSomething();

//sử dụng hàm map để duyệt qua một mảng

var squares = [1,2,3,4].map(function (val) {  
    return val * val;  
}); 
// squares will be equal to [1, 4, 9, 16] 