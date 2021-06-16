import { CounterService } from "./../counter.service";
import { UsersService } from "./../users.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.counterService.increaseActiveToInactive();
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
}
