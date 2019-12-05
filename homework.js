var voters = [
    {name:'Bob' , age: 30, voted: 1},
    {name:'Jake' , age: 32, voted: 1},
    {name:'Kate' , age: 25, voted: 0},
    {name:'Sam' , age: 20, voted: 0},
    {name:'Phil' , age: 21, voted: 1},
    {name:'Ed' , age:55, voted:1},
    {name:'Tami' , age: 54, voted:1},
    {name: 'Mary', age: 31, voted: 0},
    {name: 'Becky', age: 43, voted: 0},
    {name: 'Joey', age: 41, voted: 1},
    {name: 'Jeff', age: 30, voted: 1},
    {name: 'Zack', age: 19, voted: 1}
];


/**
 * 1. Tính Tổng [Tuổi] có voted là 1
 * 2. Tính Trung Bình Cộng [Tuổi] có voted là 0
 */
let fillter= voters.filter(item=>{
    return item.voted===1
},)
//console.log(fillter);

let sumAge= fillter.reduce(function(previousVal,currentVal){
    previousVal+=currentVal.age;
    return previousVal
},0)
//console.log(sumAge);

let sumAge1=voters.reduce(function(previousVal,currentVal){
    if(Object.is(currentVal.voted,1))
        {
            previousVal+=currentVal.age;
            return previousVal
        }
    return previousVal
},0)
//console.log(sumAge1);

let fillter1= voters.filter(item=>item.voted===0)
//console.log(fillter1);
let sumAvg=voters.reduce(function(previousVal,currentVal,index){
    if(Object.is(currentVal['voted'],0)){
        if(voters.length-1===index)
            return (previousVal+currentVal.age)/fillter1.length
         return previousVal+currentVal.age
    }
    return previousVal
},0)



//console.log(sumAvg);




let length2=voters.length
let length1=voters.filter(item=>item.voted===0).length
//console.log(length1);

let sumAvg1=voters.reduce((previousVal,currentVal,index)=>{
    if(Object.is(currentVal['voted'],0)){
        if(Object.is(length2-1,index))
            return (previousVal+currentVal.age)/length1
        return previousVal+currentVal.age
    }
    return previousVal
    
    
},0)
//console.log(sumAvg1);
var dem = 0;
var avarage = voters.reduce((a, b, index) => {
   if(b.voted === 0) {
      dem++;
      if(voters.length - 1 == index) return (a + b.age) / dem;
      return a + b.age;
   }
   return a;
}, 0);
console.log(`Trung binh tuoi co voted la 0: ${avarage}`);

