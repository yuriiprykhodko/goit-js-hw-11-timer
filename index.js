const refs = {
  timer: document.querySelector("#timer-1"),
  days: document.querySelector("[data-value=days]"),
  hours: document.querySelector("[data-value=hours]"),
  mins: document.querySelector("[data-value=mins]"),
  secs: document.querySelector("[data-value=secs]"),
};
class CountdownTimer {
  constructor() {
    this.targetDate = new Date("Jul 17, 2021");
    this.refs;
  }

  updateTime({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }
  start() {
    this.targetDate = new Date("Jul 17, 2021");
    setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      const time = this.getTimeComponents(deltaTime);
      this.updateTime(time);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
console.log(timer.start());
