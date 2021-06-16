import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  myCounter;
  count: number = 1;
  @Output() counterEmitter = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  startCounter() {
    this.myCounter = setInterval(() => {
      this.counterEmitter.emit(this.count);
      this.count++;
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.myCounter);
  }
}
