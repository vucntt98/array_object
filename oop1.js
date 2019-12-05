class point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}
class line{
    constructor(pointA,pointB){
        this.pointA=pointA;
        this.pointB=pointB;
    }
    getdis()
    {
        let dx= this.pointA.x -this.pointB.x;
        let dy=this.pointB.y -this.pointB.y;
        return Math.sqrt(dx*dx+dy*dy)
    }
}
let p =new point(1,2)
let p1 =new point(2,2)
let line1= new line (p,p1)
console.log(line1.getdis());
