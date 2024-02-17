import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeUrl='http://localhost:8000/api/recipes/'

  http=inject(HttpClient);

  

  recipePost(recipeData:any){
    return this.http.post(this.recipeUrl, recipeData);
  }

  recipeGet(){
    return this.http.get(this.recipeUrl);
  }

}
