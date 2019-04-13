import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe-crud.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  public recipe: IRecipe;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data['id'];
      this.recipeService.getById(id).subscribe((data) => {
        this.recipe = data;
      })
    })
  }

}
