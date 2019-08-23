import { Login } from "./../../../store/auth/auth.actions";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducers";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") loginForm: NgForm;
  loginFormValidator: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.loginFormValidator = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16)
      ])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginFormValidator.controls[controlName].hasError(errorName);
  };

  signIn() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      localStorage.setItem("token", data["token"]);
      localStorage.setItem("name", data["user"]["name"]);
      localStorage.setItem("isAdmin", data["user"]["isAdmin"]);
      this.store.dispatch(new Login(data));
      this.router.navigate(["/"]);
    });
  }
}
