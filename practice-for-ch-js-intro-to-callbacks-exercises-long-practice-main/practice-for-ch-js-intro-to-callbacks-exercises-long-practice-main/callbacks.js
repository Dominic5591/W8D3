class Clock {
  constructor(hours, minutes, seconds) {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.

    const dateObject = new Date();
    this.hours = dateObject.getHours();
    this.minutes = dateObject.getMinutes();
    this.seconds = dateObject.getSeconds();

    // this._tick.bind(this)

    setInterval(this._tick.bind(this), 10)
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

      if (this.seconds < 60) {
        this.seconds++
      } else if (this.seconds === 60) {
        this.seconds = 0
        this.minutes++
      } else if (this.minutes === 60) {
        this.minutes = 0
        this.hours + 1 % 24
      }

    return this.printTime()
  }
}

const clock = new Clock();