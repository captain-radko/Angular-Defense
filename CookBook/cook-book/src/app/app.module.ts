// @angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// app imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./modules/material.module";

// component imports
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { UserComponent } from './components/users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeCardComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
