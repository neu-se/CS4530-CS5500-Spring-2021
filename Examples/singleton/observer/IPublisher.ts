export interface IPublishingClock {

    // reset the tick counter
    reset(): void
    // increment the tick counter
    tick(): void
    // subscribe a new observer
    subscribe(obs:ClockObserver) : void
}

export interface ClockObserver {

    // action to take when clock ticks
    onTick(time:number):void

    // action to take when the clock resets
    onReset():void

}