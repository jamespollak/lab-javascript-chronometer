class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.addOneToTimer = this.addOneToTimer.bind(this)

  }
  startClick() {
    this.intervalId = window.setInterval( this.addOneToTimer, 1000);
    const newTime = document.getElementById("secUni") 
    newTime.innerText = this.currentTime
  }

  addOneToTimer() {
    this.currentTime = this.currentTime +1;
  }

  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}

//var chrono = new Chronometer();

/* 
  chrono = {
    currentTime: 0,
    intervalId: 1000,
    startClick: function() {
      chrono.currentTime = chrono.currentTime + 1
    }
  }
*/
chrono.currentTime
chrono.startClick()

/*var newtime = document.getElementById("milDec").innerText
console.log(newtime)
debugger*/