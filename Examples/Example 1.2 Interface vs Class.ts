// illustrate interfaces, classes, objects in Typescript

// getx(), gety() return the x,y coordinates of the point
interface Point {getx():number, gety():number}

class CartesianPoint implements Point {
    constructor (private x : number, private y : number) {}
    getx() {return this.x}
    gety() {return this.y}
}

// r is radius, theta is angle (in radians)
class PolarPoint implements Point {
    constructor (private r:number, private theta:number) {}
    getx() {return this.r * Math.cos(this.theta)}
    gety() {return this.r * Math.sin(this.theta)}
}

const point1 = new CartesianPoint(0.0, 1.0)
const point2 = new PolarPoint(1.0, Math.PI/2.0)