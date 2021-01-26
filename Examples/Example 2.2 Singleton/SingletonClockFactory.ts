// factory for making clocks.
// but this factory cheats: if it's already made a clock, 
// it returns the same one every time

import { IClock } from './IClock'

class Clock {
    private ticks = 0
    public reset(): void { this.ticks = 0 }
    public tick(): void { this.ticks++ }
    public currentTime(): number { return this.ticks }
}

export default class SingletonClockFactory
    extends Clock implements IClock {
    // make the constructor private so no one can initialize this
    // from other classes
    private constructor() { super() }

    private static _theClock: IClock

    // first-time-through hack
    public static getClock() {
        if (SingletonClockFactory._theClock === undefined) {
            SingletonClockFactory._theClock = new Clock()
        }
        return SingletonClockFactory._theClock
    }
}