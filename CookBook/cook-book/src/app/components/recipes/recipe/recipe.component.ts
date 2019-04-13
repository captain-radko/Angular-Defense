import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe-crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe$: Observable<Array<IRecipe>>;
  userRecipes$: Observable<Array<IRecipe>>;
  recipe: IRecipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe$ = this.recipeService.getAllRecipes()
    this.userRecipes$ = this.recipeService.getUserRecipe()
  }

}
