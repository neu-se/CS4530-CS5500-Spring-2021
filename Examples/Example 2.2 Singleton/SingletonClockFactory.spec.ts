import {assert} from 'chai'
import SingletonClockFactory from './SingletonClockFactory'

function test1 () {
    let clock1 = SingletonClockFactory.getClock()
    let clock2 = SingletonClockFactory.getClock()
    clock1.tick()
    assert.equal(clock1.currentTime(),1)
    clock1.tick()
    assert.equal(clock1.currentTime(),2)
    assert.equal(clock2.currentTime(),2, "clock2 should see clock1's ticks")
    clock2.tick()
    assert.equal(clock1.currentTime(),3, "clock1 should see clock2's ticks")
}

describe ('check that clock is a singleton', () => {
    it('test1', test1)
})