import {IClock} from './IClock'

class FactoryMadeClock implements IClock {
    private ticks = 0
    public reset():void { this.ticks = 0 }
    public tick():void { this.ticks++ }
    public currentTime():number { return this.ticks }
}

// no need to instantiate ClockFactory
// just say ClockFactory.getClock()
export default class ClockFactory {
    public static getClock():IClock {return new FactoryMadeClock()}
}