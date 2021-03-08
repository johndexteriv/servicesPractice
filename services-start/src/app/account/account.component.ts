import { Component, Input } from "@angular/core";
import { AccountsService } from "../core/services/accounts/accounts.service";
import { LoggingService } from "../core/services/logging/logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accontsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accontsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
