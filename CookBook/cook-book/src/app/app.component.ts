import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "cook-book";

  constructor(
    public authService: AuthService,
    private router: Router,
    public toastr: ToastrService
  ) {}

  logout() {
    this.authService.logout();

    this.router.navigate(["/user/login"]);
    this.toastr.info("Logged out");
  }
}
