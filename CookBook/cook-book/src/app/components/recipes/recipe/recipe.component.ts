import { QuestionComponent } from "./../question/question.component";
import { Component, OnInit } from "@angular/core";
import { IRecipe } from "src/app/models/recipe";
import { RecipeService } from "src/app/services/recipe-crud.service";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { shareReplay } from "rxjs/operators";
import { MatDialog, MatDialogConfig } from "@angular/material";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"]
})
export class RecipeComponent implements OnInit {
  recipe$: Observable<Array<IRecipe>>;
  userRecipes$: Observable<Array<IRecipe>>;
  recipe: IRecipe;
  constructor(
    public authService: AuthService,
    private recipeService: RecipeService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.recipe$ = this.recipeService.getAllRecipes();
    this.userRecipes$ = this.recipeService.getUserRecipe();
    shareReplay();
  }

  question(id) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(QuestionComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.recipeService.deleteRecipe(id).subscribe(() => {
        this.recipe$ = this.recipeService.getAllRecipes();
        this.userRecipes$ = this.recipeService.getUserRecipe();
        shareReplay();
      });
    });
  }
}
