// class Clock {
//   constructor(hours, minutes, seconds) {
//     const dateObject = new Date();
//     this.hours = dateObject.getHours();
//     this.minutes = dateObject.getMinutes();
//     this.seconds = dateObject.getSeconds();

//     setInterval(this._tick.bind(this), 1000);
//   }

//   printTime() {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//   }

//   _tick() {
//     if (this.seconds < 60) {
//       this.seconds++;
//     } else if (this.seconds === 60) {
//       this.seconds = 0;
//       this.minutes++;
//     }
//     if (this.minutes === 60) {
//       this.minutes = 0;
//       this.hours = (this.hours += 1) % 24;
//     }
//     return this.printTime();
//   }
// }

// const clock = new Clock();

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addNumbers(sum, numsleft, completionCallback) {
  if (numsleft > 0) {
    reader.question('give me a number please', (answer) => {
      sum += parseInt(answer);
      console.log(sum);
      addNumbers(sum, numsleft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    if (numsleft === 0) {
      reader.close();
    }
  }
}

addNumbers(0, 3, (sum) => console.log(`Total Sum: ${sum}`));
