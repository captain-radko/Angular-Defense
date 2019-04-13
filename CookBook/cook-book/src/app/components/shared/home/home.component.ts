import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipe$: Observable<Array<IRecipe>>;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe$ = this.recipeService.getLatest()
  }

}
