import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from '../models/recipe';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeService {
  private readonly getAllUrl = 'http://localhost:5000/recipe/all/recipes';
  private readonly getLatestUrl = 'http://localhost:5000/recipe/';
  private readonly getUserUrl = 'http://localhost:5000/recipe/all/recipes/mine';
  private readonly addUrl = 'http://localhost:5000/recipe/all/add';
  private readonly detailsUrl = 'http://localhost:5000/recipe/details/';


  constructor(
    private http: HttpClient
  ) { }

  add(body) {
    return this.http.post<IRecipe>(this.addUrl, body);
  }

  getAllRecipes(): Observable<Array<IRecipe>> {
    return this.http.get<Array<IRecipe>>(this.getAllUrl);
  }

  getUserRecipe(): Observable<Array<IRecipe>> {
    return this.http.get<Array<IRecipe>>(this.getUserUrl);
  }

  getById(id): Observable<IRecipe> {
    return this.http.get<IRecipe>(this.detailsUrl + id);
  }

  getLatest(): Observable<Array<IRecipe>> {
    return this.http.get<Array<IRecipe>>(this.getLatestUrl);
  }
}