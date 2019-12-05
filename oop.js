class preson{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getInfo(){
        return `${this.name}  | ${this.age}`
    }
}
let p= new preson('mern','dd')
console.log(p);

class student extends preson{
    constructor(name,age,fullname){
    super(name,age),
    this.fullname=fullname
    }
    getInfo(){
        return `${this.name}|${this.age}|${this.fullname}`
    }
}
let k =new student('Vu',18,'Le huynh anh vu')
console.log(k);