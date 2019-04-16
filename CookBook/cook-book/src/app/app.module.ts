// @angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// app imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// module imports
import { MaterialModule } from "./modules/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// component imports
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';

// services imports
import { AuthService } from './services/auth.service';
import { JwtInterceptorService } from './services/interceptors/jwt-interceptor.service';
import { AddRecipeComponent } from './components/recipes/add-recipe/add-recipe.component';
import { AllRecipesComponent } from './components/recipes/all-recipes/all-recipes.component';
import { RecipeService } from './services/recipe-crud.service';
import { ResponseHandlerInterceptorService } from './services/interceptors/response-handler-interceptor.service';
import { EditRecipeComponent } from './components/recipes/edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    NotFoundComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    AddRecipeComponent,
    AllRecipesComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseHandlerInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
