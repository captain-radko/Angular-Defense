// @angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/users/user/user.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  {
    path: "user", component: UserComponent, children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },
  { path: "recipes", component: RecipeComponent },
  { path: "details/:id", component: RecipeDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
