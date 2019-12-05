const arrStudent=[
    {lastName:'a', fullName:'b',age:20,gender:1},
    {lastName:'a1', fullName:'b1',age:21,gender:1},
    {lastName:'a2', fullName:'b2',age:22,gender:1},
    {lastName:'a3', fullName:'b2',age:23,gender:0},
    {lastName:'a3', fullName:'b2',age:24,gender:1},
];
let s=[40,80,100] 
let sumAge = arrStudent.reduce(function(preVal,curVal){
   
    preVal=preVal+curVal.age;
        return preVal;
},0)
let avgAge=arrStudent.reduce(function(preVal,curVal,index){
    let t=arrStudent.length;
    if(t-1===index)
        return (preVal+curVal.age)/t
    return preVal+curVal.age
},0)
//console.log(avgAge);

let fill =arrStudent.filter(item=>{
    return item.age>=22 &&item.gender===1
})
//console.log(fill);
let avgAge1=fill.reduce(function(preVal,curVal,index){
    if(fill.length-1===index)
        return (preVal+curVal.age)/fill.length
    return preVal+curVal.age
},0)
//console.log(avgAge1);//c1

let avgAge2=arrStudent.reduce(function(preVal,curVal){
    if(curVal.age>=22&&curVal.gender===1)
          preVal.push(curVal)
    return preVal
    
},[])
//console.log(avgAge2);


