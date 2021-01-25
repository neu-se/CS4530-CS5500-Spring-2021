export interface IClock {
    // reset the tick counter to 0
    reset(): void
    // increment the tick counter
    tick(): void
    // returns the number of ticks since the last reset.
    currentTime(): number
}

