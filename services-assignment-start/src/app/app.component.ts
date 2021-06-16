import { CounterService } from "./counter.service";
import { UsersService } from "./users.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  constructor(private counterService: CounterService) {
    this.counterService.activeToInactive.subscribe(
      (count: number) => (this.activeToInactiveCount = count)
    );
    this.counterService.inactiveToActive.subscribe(
      (count: number) => (this.inactiveToActiveCount = count)
    );
  }
}
