import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IRecipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  public recipe: IRecipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  @ViewChild('editForm') editForm: NgForm;

  ngOnInit() {
  }

  edit() {
    this.route.params.subscribe(data => {
      let id = data['id'];
      this.recipeService.edit(id, this.editForm.value).subscribe((data) => {
        this.recipe = data;
        this.router.navigate(['/all/recipes']);
      })
    })
  }

}
