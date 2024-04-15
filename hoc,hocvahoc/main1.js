
var fullName ='Doan Ngoc Chung';var age= 26

alert(age)
alert(fullName)
// ctrl + / de tao comment '//'

/**
 * khai bao comment tren hieu dong 
 * /+*+* enter
 */

// cach vo hieu hoa code 
// tren nhieru dong bang ctrl /
// boi den xong ctrl +/

// Gioi thieu 1 so ham built-in
//   1 alert 
//   2 console in ra gì đó ở bảng điều khiển
console.log(1234)
//   3 confirm  tạo ra hôp thoại xác nhận
confirm("xác nhận m dag học j!")
//   4 prompt tạo ô để nhập
prompt("nhap tuoi ")
//   5 setTimeout(() => {
    
//    }, timeout);  cho 1 đoạn code được chạy sau 1 khoảng thời gian , thời gian có gtri minigiay
 setTimeout(() => {
    alert('thoang bao')
 },5000)
//   6 setInterval(() => {
    
//    }, interval);  chạy 1 đoạn code liên tíc tron g1 khoangt thtơie fgian đã quy định
setInterval(() => {
    console.log('helio'+ Math.random())
},5000)

/** Toaán tử
 * số học- arithmetic ( + - * ** / % ++(tăng 1 gtrị số) --(giảm 1 gtrị số) )
 * gán - asignment (+= -= *= /= **= )
 * so sánh - comparíon
 * logic- logical
 */
// ví dụ
var a = 1+3
 console.log(a)

var gán='ten' 
var b =2 
var c= 5
 
if (a>b) {
    alert('đúng');
}

var d=1 
var e =2
if (d>0 && e>0) {
    alert('cùng lớn hơn 0 ')
}

/*
var number = 3;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3

var number = 1;

console.log(++number); // 2
console.log(number); // 2

console.log(++number); // 3
console.log(number); // 3
*/
/*
Toán tử - -
Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1.

Tổng kết
x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
--x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
*/





