import { IPublishingClock, ClockObserver } from './IPublisher';

class Clock implements IPublishingClock {
    
    // clock functionality
    private clockTime = 0
    public tick () {this.clockTime++; this.publishTickEvent()}
    public reset() {this.clockTime=0; this.publishResetEvent()}

    private observers : ClockObserver[]

    // register responds with the current time, so the observer
    // will be initialized
    public subscribe(obs:ClockObserver): void {
        this.observers.push(obs);
        obs.onTick(this.clockTime)
    }
    private publishTickEvent() {
        this.observers.forEach(obs => {obs.onTick(this.clockTime)})
    }
    
    private publishResetEvent() {
        this.observers.forEach(obs => {obs.onReset()})
    }
}