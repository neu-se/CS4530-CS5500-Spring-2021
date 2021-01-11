
let c = new Circle(initRadius)
let a = c.diameter()

let a = c.calculateDiameter

table1.addItem(student1,grade1)

interface Shirt {
    color : Color   // the color of the shirt
}

let myShirt = {color: 0xff000} // my shirt

let salesPrice = netPrice * 1.06

const salesTaxRate = 1.06
let salesPrice = netPrice * salesTaxRate

function testequal <T> (testname: string, actual: T, correct: T) {
    it(testname,
        function () { assert.deepEqual(actual, correct) })
}

describe('tests for count_local_morks', function () {
    testequal('empty crew',count_local_morks(ship1),0)
    testequal('just Mork',count_local_morks(ship2),1)
    testequal('just Mindy',count_local_morks(ship3),0)
    testequal('two Morks',count_local_morks(ship4),2)
    testequal('drone has no Morks',count_local_morks(drone1),0)
})

function grossTax (income:number): number {
    if ((0 <= income) && (income <= 10000))
    {return 0}
    else if ((10000 < income) && (income <= 20000))
    {return 0.10 * (income - 10000)}
    else if ((20000 < income) && (income < 50000))
    {return grossTax(20000) + 0.20 * (income - 20000)}
    else {return grossTax(50000) + 0.25 * (income - 50000)}

}