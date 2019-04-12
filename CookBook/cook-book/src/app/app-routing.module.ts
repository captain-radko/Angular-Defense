// @angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './components/shared/home/home.component';
import { UserComponent } from './components/users/user/user.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  {
    path: "user", component: UserComponent, children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },
  { path: "recipes", component: RecipeComponent, canActivate: [AuthGuard] },
  { path: "details/:id", component: RecipeDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
