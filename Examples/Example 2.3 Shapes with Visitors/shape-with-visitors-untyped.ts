// represents a position on the screen
type ScreenPosition = {x:number, y:number}

function translatePosition (pos:ScreenPosition, dx: number, dy: number) {
    return {x: pos.x + dx, y: pos.y + dy}
}

// operates on a node
// the node itself is responsible for invoking the 
// visitor on its descendants
interface ShapeVisitor {
    visitCircle(c:Circle): void
    visitSquare(sq:Square): void
    visitCompound(c:Compound): void
}

// a Shape is any class that will accept a Shape Visitor
interface Shape {
    // calls back the appropriate method of the visitor.
    // also sends the visitor to each child of the shape
    accept (v:ShapeVisitor) : void
}


// radius in pixels, must be >= 0
class Circle implements Shape {

    public accept(v: ShapeVisitor): void { v.visitCircle(this) }

    constructor(
        private pos: ScreenPosition,
        private radius: number
    ) { }
    // keep the actual properties private for better encapsulation
    public getPos() { return this.pos }
    public getRadius() { return this.radius }

}

// side in pixels, must be >= 0
class Square implements Shape {

    public accept (v:ShapeVisitor) {return v.visitSquare(this)}

    constructor (private pos:ScreenPosition, private side:number) {}

    public getPos () {return this.pos} 
    public getSide () : number { return this.side}   
    
}

class Compound implements Shape {

    public accept (v:ShapeVisitor) {
        // apply the visitor using in-order traversal
        this.back.accept(v);
        v.visitCompound(this);
        this.front.accept(v)}

    constructor(private front:Shape, private back:Shape){}

    public getFront () : Shape { return this.front }
    public getBack  () : Shape { return this.back }

}

// creates a list of all the ScreenPositions in the shape that
// it visits.
// retrieve the final answer with getPositions
class ListPositionsVisitor implements ShapeVisitor {
    private positions : ScreenPosition[] = []
    public visitCircle (c:Circle) {this.positions.push(c.getPos())}
    public visitSquare (sq:Square) {this.positions.push(sq.getPos())}
    // a Compound does not have a position, so there's
    // nothing to do here.
    // In any case, the accept method does all the work
    public visitCompound (c:Compound) {}
    public getPositions() {return this.positions}
}

// given a Shape, returns a list of all the ScreenPositions
// in the Shape.
function shape2list(shape: Shape): ScreenPosition[] {
    let newVisitor = new ListPositionsVisitor()
    shape.accept(newVisitor)
    return newVisitor.getPositions()
}


export {}