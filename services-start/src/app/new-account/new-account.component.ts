import { AccountsService } from "./../accounts.service";
import { LoggingService } from "./../logging.service";
import { Component } from "@angular/core";
import { toBase64String } from "@angular/compiler/src/output/source_map";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private loggingSerice: LoggingService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert("New Status: " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingSerice.logStatusChange(accountStatus);
  }
}
