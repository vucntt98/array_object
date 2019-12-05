const {CONTENT}= require('./string2')
class Item{
    constructor(title,description){
        this.title=title;
        this.description=description;
    }
}
const k= CONTENT.split('<item>')
k.splice(0,1)
const t=(item,a,b)=>{
    let start= item.indexOf(a);
    let end =item.indexOf(b);
    return item.slice(start+a.length,end);
}
const kq=item=>{
    let title=t(item,'<title>','</title>');
    let description=t(item,'<description>','</description>')
    return new Item(title,description);
}
const adut= k.map(kq)
console.log(adut);    
































// const k= CONTENT.split('<item>')
// k.splice(0,1)
// console.log(k);

// const m= (item,a,b)=>{
//     let k =item.indexOf(a)
//     let v =item.indexOf(b)

//     return item.slice(k + a.length,v)
    
// }
// const v= k.forEach(item=>{
//   let title=  m(item,'<title>','</title>') ;
//    let description = m(item,'<description>','</description>');
//     console.log({title,description});
// })
