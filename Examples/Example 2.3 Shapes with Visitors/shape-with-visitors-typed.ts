// represents a position on the screen
type ScreenPosition = {x:number, y:number}

function translatePosition (pos:ScreenPosition, dx: number, dy: number) {
    return {x: pos.x + dx, y: pos.y + dy}
}

interface ShapeVisitor<T> {
    visitCircle(c:Circle): T
    visitSquare(sq:Square): T
    visitCompound(c:Compound): T
}

// a Shape is any class that will accept a Shape Visitor
interface Shape {
    // calls back the appropriate method of the visitor.
    // also sends the visitor to each child of the shape
    // accepts a visitor of any return type T
    accept <T> (v:ShapeVisitor<T>) : T
}


// radius in pixels, must be >= 0
class Circle implements Shape {

    public accept <T> (v:ShapeVisitor<T>) {return v.visitCircle(this)}

    constructor (
        private pos: ScreenPosition,
        private radius: number
    ) { }

    public getPos() { return this.pos }
    public getRadius () {return this.radius}
    
}

// side in pixels, must be >= 0
class Square implements Shape {

    public accept <T> (v:ShapeVisitor<T>) {return v.visitSquare(this)}

    constructor (private pos:ScreenPosition, private side:number) {}

    public getPos () {return this.pos} 
    public getSide () : number { return this.side}   
    
}

class Compound implements Shape {

    public accept <T> (v:ShapeVisitor<T>) {return v.visitCompound(this)}

    constructor(private front:Shape, private back:Shape){}

    public getFront () : Shape { return this.front }
    public getBack  () : Shape { return this.back }

}

class weightOfShapeVisitor implements ShapeVisitor<number> {
    
    public visitCircle(c:Circle) {
        return (Math.PI * c.getRadius() * c.getRadius())
    }
    public visitSquare (sq:Square) {
        return (sq.getSide() * sq.getSide())
    }
    public visitCompound (c:Compound) : number {
        return c.getFront().accept(this) + c.getBack().accept(this)
    }

}

class translateShapeVisitor implements ShapeVisitor<Shape> {

    constructor (private dx:number, private dy:number) {}    

    public visitSquare(sq: Square) {
        return new Square(
            translatePosition(sq.getPos(), this.dx, this.dy),
            sq.getSide())        
    }

    public visitCircle(c: Circle) {
        return new Circle(
            translatePosition(c.getPos(), this.dx, this.dy),
            c.getRadius())
    }
    public visitCompound(c:Compound) : Compound {
        return new Compound (
            c.getFront().accept<Shape>(this),
            c.getBack().accept<Shape>(this)
        )
    }
}

export {}