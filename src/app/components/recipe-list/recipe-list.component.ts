import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export default class RecipeListComponent {
  recipeService = inject(RecipeService);
  recipeData: any;

  ngOnInit() {
    this.recipeList();
  }

  recipeList() {
    this.recipeService.recipeGet().subscribe((res) => {
      this.recipeData = res;
      console.log('RECIPE LIST ', this.recipeData);
    });
  }
}
