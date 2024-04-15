// Ex01: 
// In ra 10 câu "USinh viên UD" sử dụng 3 vòng lặp for; while; do while
// var i = 1;
// while(i <= 10){
// 	document.write('Sinh viên UDU <br>');
// 	i++;
// }

// for (var i = 1; i <= 10; i++) {
//     document.write('Sinh viên UDU1 <br>');
// }


// var i = 1;
// do {
// 	document.write('Sinh viên UDU2  <br>');
// 	i++;
// } while(i <= 10);

// document.write('Sinh viên UDU3 ! <br>');


//Ex02:
// Tính tổng các số từ 1 đến 10 sử dụng 3 vòng lặp

// Khởi tạo biến sum để lưu tổng
// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     sum += i; 
// }
// document.write(sum)

// while(i <= 10){
//     i++;
//     sum+=i
// }document.write(sum);
  
// do {
//     document.write(sum);
//     i++;
//     sum+=i
// } while(i <= 10);
    
// Ex03:
// Tính tổng các số chẵn từ 1 đến 100 sử dụng vòng lặp for
// var sum = 0
// for( var i = 2; i<=100 ; i+2){
//  sum = +i

// } document.write(sum);
function TTCN(a,b){
    document.write('Họ tên:' + a)
    document.write('Mã sinh viên :' + b)
}

document.write(TTCN(doanngocchung,B62b78347))

function xin_chao(name)
{
 document.write('Hi' + name);
}
xin_chao('Zent');
xin_chao('Nam');
 
function sumToTen() {
    let x = 4;
    let y = 6;
    let sum = x + y;
    return sum === 10;
}
console.log(sumToTen());
