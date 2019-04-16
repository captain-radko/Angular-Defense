import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { RecipeService } from 'src/app/services/recipe-crud.service';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  constructor(
    private ngZone: NgZone,
    private recipeService: RecipeService,
    private router: Router
  ) { }
  adeRecipeValidator: FormGroup;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @ViewChild('createForm') createForm: NgForm;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {
    this.adeRecipeValidator = new FormGroup({
      image: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
      ingredients: new FormControl('', [Validators.required, Validators.minLength(4)]),
      recipeText: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.adeRecipeValidator.controls[controlName].hasError(errorName);
  }

  create() {
    this.recipeService
      .add(this.createForm.value)
      .subscribe(() => {
        this.router.navigate(['/all/recipes']);
      });
  }

}
