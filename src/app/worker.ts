import { Common } from './common';
import { Player } from './player';

export class Worker {
  name: string;
  level: number;
  upgradeCost: number;
  duration: number;
  step: number;
  income: number;
  multiplier: number;
  icon: string;
  timeTo: Date;
  progress: number;
  progressTarget: number;
  isRunning: boolean;
  autoRunning: boolean;
  payout: boolean;

  constructor(
    name: string,
    level: number,
    upgradeCost: number,
    duration: number,
    step: number,
    income: number,
    multiplier: number,
    icon: string
  )
  {
    this.name = name;
    this.level = level;
    this.upgradeCost = upgradeCost;
    this.duration = duration;
    this.step = step;
    this.income = income;
    this.multiplier = multiplier;
    this.icon = icon;

    this.isRunning = false;
    this.autoRunning = false;
    this.payout = false;

    //this.setTimeTo();

    //this.progress = this.getProgress();
    //this.updateTimer();
  }

  levelUp(player: Player) {
    if (this.upgradeCost <= player.money) {
      player.money -= this.upgradeCost;
      this.level++;
      this.income *= (this.step / 4);
      this.upgradeCost *= this.step;

      if (this.level % this.step === 0) {
        this.income *= this.multiplier;
      }
    }
  }

  getProgress() {
    let progessValue = Common.round(((1 - ((this.timeTo.getTime() - new Date().getTime()) / this.progressTarget)) * 100), 0);
    if (progessValue >= 100) {
      if (this.isRunning) {
        this.isRunning = false;
        this.payout = true;
        progessValue = 0;
      }
      else {
        return 0;
      }
    }

    return progessValue;
  }

  updateTimer() {
    const angularBody = this;
    setInterval(() => {
      angularBody.progress = angularBody.getProgress();
    }, 1000);
  }

  setTimeTo() {
    this.timeTo = new Date();
    this.timeTo.setSeconds(new Date().getSeconds() + this.duration);
    this.progressTarget = (this.timeTo.getTime() - new Date().getTime());
  }

  addMoney(): number {
    if (this.payout) {
      this.payout = false;
      return this.income;
    }

    return 0;
  }

  start() {
    this.isRunning = true;
    this.setTimeTo();

    this.progress = this.getProgress();
    this.updateTimer();
  }

  setAuto() {
    this.autoRunning = true;

    setInterval(() => {
      if (!this.isRunning) {
        this.start();
      }
    }, 1000);
  }
}
