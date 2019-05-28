// @angular imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// module imports
import { MaterialModule } from "./modules/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { OrderModule } from "ngx-order-pipe";

// component imports
import { HomeComponent } from "./components/shared/home/home.component";
import { RegisterComponent } from "./components/users/register/register.component";
import { LoginComponent } from "./components/users/login/login.component";
import { UserComponent } from "./components/users/user/user.component";
import { NotFoundComponent } from "./components/shared/not-found/not-found.component";
import { RecipeComponent } from "./components/recipes/recipe/recipe.component";
import { RecipeDetailsComponent } from "./components/recipes/recipe-details/recipe-details.component";
import { AddRecipeComponent } from "./components/recipes/add-recipe/add-recipe.component";
import { AllRecipesComponent } from "./components/recipes/all-recipes/all-recipes.component";
import { EditRecipeComponent } from "./components/recipes/edit-recipe/edit-recipe.component";
import { AppComponent } from "./app.component";

// services imports
import { AuthService } from "./services/auth.service";
import { JwtInterceptorService } from "./services/interceptors/jwt-interceptor.service";
import { RecipeService } from "./services/recipe-crud.service";
import { ResponseHandlerInterceptorService } from "./services/interceptors/response-handler-interceptor.service";
import { ProfileComponent } from "./components/users/profile/profile.component";
import { QuestionComponent } from "./components/recipes/question/question.component";

//ngrx store
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    NotFoundComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    AddRecipeComponent,
    AllRecipesComponent,
    EditRecipeComponent,
    ProfileComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    OrderModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
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
  exports: [QuestionComponent],
  entryComponents: [QuestionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
