// represents a position on the screen
type ScreenPosition = {x:number, y:number}

function translatePosition (pos:ScreenPosition, dx: number, dy: number) {
    return {x: pos.x + dx, y: pos.y + dy}
}

// a Shape is anything that has a weight method and a translate method
// meaning of weight and translate goes here
interface Shape {
    weightOfShape () : number,
    translateShape(dx:number, dy:number) : Shape
}


// radius in pixels, must be >= 0
class Circle implements Shape {
    constructor (
        private pos: ScreenPosition,
        private radius: number
    ) { }
    public weightOfShape () : number  { return (Math.PI * this.radius * this.radius) }
    public translateShape (dx:number, dy:number) : Circle {
        return new Circle(
            translatePosition(this.pos, dx, dy),
            this.radius
        )
    }
}

// side in pixels, must be >= 0
class Square implements Shape {
    constructor (private pos:ScreenPosition, private side:number) {}
    public weightOfShape () : number {return this.side * this.side}
    public translateShape (dx:number, dy:number) : Square {
        return new Square(
            translatePosition(this.pos, dx, dy),
            this.side
        )
    }
}

class Compound implements Shape {
    constructor(private front:Shape, private back:Shape){}
    public weightOfShape (): number {
        return this.front.weightOfShape() + this.back.weightOfShape()
    }
    public translateShape (dx: number, dy: number) {
        return new Compound (
            this.front.translateShape(dx, dy),
            this.back.translateShape(dx, dy)
        )
    }
}
