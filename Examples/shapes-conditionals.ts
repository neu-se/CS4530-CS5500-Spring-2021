

type Shape = Circle | Square | Compound
// radius, side in pixels, must be >= 0
type Circle = { type: "Circle", pos: ScreenPosition, radius: number }
type Square = { type: "Square", pos: ScreenPosition, side: number }
type Compound = { type: "Compound", front: Shape, back: Shape }

// return weight of the shape, assuming each shape weighs
// 1 gram per pixel of area.  
function weightOfShape(s: Shape): number {
    switch (s.type) {
        case "Circle":
            { return (Math.PI * s.radius * s.radius); }
        case "Square":
            { return s.side * s.side }
        case "Compound":
            { return weightOfShape(s.front) + weightOfShape(s.back) }

    }
}

// represents a position on the screen
type ScreenPosition = {x:number, y:number}

function translatePosition (pos:ScreenPosition, dx: number, dy: number) {
    return {x: pos.x + dx, y: pos.y + dy}
}
// returns a shape like the original, but translated by dx, dy
function translateShape(s:Shape, dx:number, dy:number):Shape {
    switch (s.type) {
        case "Circle":
            { return {type: "Circle", pos: translatePosition(s.pos,dx,dy), radius: s.radius} }
        case "Square":
            { return {type:"Square", pos: translatePosition(s.pos,dx,dy), side: s.side} }
        case "Compound":
            { return {
                type:  "Compound",
                front: translateShape(s.front, dx, dy),
                back:  translateShape(s.back, dx,dy)
        }}

    }
}
 


export {}