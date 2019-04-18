import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IRecipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  public recipe: IRecipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }
  editRecipeValidator: FormGroup;
  @ViewChild('editForm') editForm: NgForm;

  ngOnInit() {
    this.editRecipeValidator = new FormGroup({
      image: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
      ingredients: new FormControl('', [Validators.required, Validators.minLength(4)]),
      recipeText: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.editRecipeValidator.controls[controlName].hasError(errorName);
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
