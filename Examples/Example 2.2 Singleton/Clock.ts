import {IClock} from './IClock'

class Clock implements IClock {
    private ticks = 0
    public reset():void { this.ticks = 0 }
    public tick():void { this.ticks++ }
    public currentTime():number { return this.ticks }

}