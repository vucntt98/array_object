const demoObject={
    lastName: 'Anh Vũ',
    fistName: 'Lê',
    fullName: function(){
        return `${this.lastName} ${this.fistName}`;
    }
}
//console.log(demoObject.fullName());
/**
 * VD2
 */
const arrStudent=[
    {lastName:'a', fullName:'b',age:20,gender:1},
    {lastName:'a1', fullName:'b1',age:21,gender:1},
    {lastName:'a2', fullName:'b2',age:22,gender:1},
    {lastName:'a3', fullName:'b2',age:22,gender:0},
    
]
/**
 * PUSH
 */
let userPushStudent= {lastName:'a4', fullName:'b4',age:23,gender:0}
arrStudent.push(userPushStudent)// Thêm vào giá trị vào  thằng cuối
arrStudent.pop()//Xóa thằng cuối
//console.log(arrStudent);
//arrStudent.forEach(item => console.log(item))
/**
 * FIND
 */
let findStudent= arrStudent.find(function(user){
    return user.lastName==='a'
})//Cách 1
let findStudentt=arrStudent.find(user=>user.fullName==='b2')
//console.log(findStudentt);//cach 2

/**
 * FIND_INDEX
 */
let findIndexStudent= arrStudent.findIndex(function(user){
    return user.lastName==='a1'
})
let findIndexStudent2=arrStudent.findIndex(user=>user.lastName==='a2')
//console.log(findIndexStudent2);

/**
 * MAP
 */
let findAge=arrStudent.map(user=>{
        user['age']=user['age']*2
        return user
})   


console.log(findAge);

/**
 * FILLTTER
 */
let fillter=arrStudent.filter(user=>user.age>=21)
//console.log(fillter);

/**
 * SOME
 */

 let some=arrStudent.some(user=>user.gender===1)
 //console.log(some);
/**
 * EVERY
 */
 let every=arrStudent.every(user=>user.gender===1)
 //console.log(every);

 /**
  * SLICE
  */
let slice=arrStudent.slice(2,4)
//console.log(slice);

//console.log(arrStudent);

/**
 * SPLICE
 */
//let splice= arrStudent.splice(1,2)
//console.log(splice);



