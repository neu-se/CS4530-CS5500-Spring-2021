// income tax example

// using conditionals
function grossTax(income: number): number {
    if ((0 <= income) && (income <= 10000)) { return 0 }
    else if ((10000 < income) && (income <= 20000)) 
    { return 0.10 * (income - 10000) }
    else if ((20000 < income) && (income <= 50000)) 
    { return grossTax(20000) + 0.20 * (income - 20000) }
    else { return grossTax(50000) + 0.25 * (income - 50000) }
}

// defines the tax bracket for income lower < income <= upper.
// if upper is null, then lower < income  (no upper bound)
type Bracket = {
    lower: number,
    upper: number | null,  
    base : number
    rate : number

}

// defines the incomes covered by a bracket
function isInBracket(income:number, bracket:Bracket) : boolean {
    if (bracket.upper == null) 
    { return (bracket.lower <= income) }
    else
    { return ((bracket.lower <= income) && (income < bracket.upper))}
}

// finds first matching bracket.
// ASSUMES: brackets are in ascending order
function income2bracket(income: number, brackets: Bracket[]): Bracket {
    return brackets.find(b0 => isInBracket(income, b0))
}
function taxByBracket(income:number,bracket:Bracket) : number {
    return bracket.base + bracket.rate * (income - bracket.lower)
}

function grossTax2 (income:number, brackets: Bracket[] ) : number {
    return taxByBracket(income,income2bracket(income,brackets))
}
    
let brackets : Bracket[] = [
    {lower:0,     upper:10000, base:0, rate:0},
    {lower:10000, upper:20000, base:0, rate:0.10},
    {lower:20000, upper:50000, base:1000, rate:0.20},
    {lower:50000, upper: null, base:7000, rate:0.25}
]

