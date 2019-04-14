import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe-crud.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe$: Observable<Array<IRecipe>>;
  userRecipes$: Observable<Array<IRecipe>>;
  recipe: IRecipe;
  constructor(public authService: AuthService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe$ = this.recipeService.getAllRecipes()
    this.userRecipes$ = this.recipeService.getUserRecipe()
  }

  deleteRecipe(id) {
    this.recipeService.deleteRecipe(id).subscribe((data) => {
      this.userRecipes$ = this.recipeService.getUserRecipe()
    });
  }

}
