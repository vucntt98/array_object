let nameCourse = ' Mern Starck Training 0106 ';

let k = nameCourse.indexOf('n',5)// Trả về vị trí giá trị mình đang tìm 
console.log(k);

let h=nameCourse.includes('Mern Starck Training ');
console.log(h);

let v= nameCourse.slice(0,4)// hàm cắt chuỗi từ [0,4)
console.log(v);

let t = nameCourse.split(' ');//Cắt bỏ khoảng trống 
console.log(t);

console.log(t.join('.'));// Nối chuỗi với nhau bằng dấu ''

let a = nameCourse.substring(1,3)// ham lấy giá trị chuỗi từ [1,3)
console.log(a);

let q =nameCourse.trim();//Hàm xóa ký tự đầu và cuối
console.log(q);

let l= nameCourse.replace('Mern','Anh')// hàm thay thế
console.log(l);