import { EventEmitter } from "@angular/core";

export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  activeToInactive = new EventEmitter<number>();
  inactiveToActive = new EventEmitter<number>();

  increaseActiveToInactive() {
    this.activeToInactiveCounter++;
    this.activeToInactive.emit(this.activeToInactiveCounter);
  }

  increaseInactiveToActive() {
    this.inactiveToActiveCounter++;
    this.inactiveToActive.emit(this.inactiveToActiveCounter);
  }
}
