// in this variant, the node calls back the visitor showing only the fields
// it wants to.  That way, you don't have to call getPos, etc.,
// but you can't side-effect the node, which you could do in the other version.


// represents a position on the screen
type ScreenPosition = {x:number, y:number}

function translatePosition (pos:ScreenPosition, dx: number, dy: number) {
    return {x: pos.x + dx, y: pos.y + dy}
}

// operates on a node
// the node itself is responsible for invoking the 
// visitor on its descendants
interface ShapeVisitor {
    visitCircle(pos:ScreenPosition, radius:number): void
    visitSquare(pos:ScreenPosition, side:number): void
    visitCompound(front:Shape,back:Shape): void
}

// a Shape is any class that will accept a Shape Visitor
interface Shape {
    // calls back the appropriate method of the visitor.
    // also sends the visitor to each child of the shape
    accept (v:ShapeVisitor) : void
}


// radius in pixels, must be >= 0
class Circle implements Shape {

    public accept(v: ShapeVisitor): void { 
        v.visitCircle(this.pos, this.radius) 
    }

    constructor(
        private pos: ScreenPosition,
        private radius: number
    ) { }

}

// side in pixels, must be >= 0
class Square implements Shape {

    public accept (v:ShapeVisitor) {return v.visitSquare(this.pos, this.side)}

    constructor (private pos:ScreenPosition, private side:number) {}  
    
}

class Compound implements Shape {

    public accept (v:ShapeVisitor) {
        // apply the visitor using in-order traversal
        this.back.accept(v);
        v.visitCompound(this.back,this.front);
        this.front.accept(v)}

    constructor(private front:Shape, private back:Shape){}


}

class ListPositionsVisitor implements ShapeVisitor {
    private positions : ScreenPosition[] = []
    public visitCircle (pos:ScreenPosition, radius:number) 
        {this.positions.push(pos)}
    public visitSquare (pos:ScreenPosition, side:number) {
        this.positions.push(pos)}
    // a Compound does not have a position. 
    // Furthermore, the accept method does all the work
    public visitCompound (back:Shape, front:Shape) {}
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