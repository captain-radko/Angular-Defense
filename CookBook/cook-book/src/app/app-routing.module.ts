import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/users/user/user.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  {
    path: "user", component: UserComponent, children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
