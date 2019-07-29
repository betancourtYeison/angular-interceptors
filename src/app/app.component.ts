import { Component } from "@angular/core";
import { UsersService } from "./services/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-interceptor";

  constructor(private _usersService: UsersService) {
    this._usersService
      .getUsers()
      .subscribe(
        response => console.log(response),
        error => console.error("Component error", error)
      );
  }
}
