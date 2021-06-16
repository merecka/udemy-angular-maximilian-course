import { CounterService } from "./../counter.service";
import { UsersService } from "./../users.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counterService.increaseInactiveToActive();
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }
}
