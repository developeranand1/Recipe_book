import { Component, inject } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  recipeList = inject(RecipeService);
  list: any;
  ngOnInit() {
    this.listRecipe();
  }

  listRecipe() {
    this.recipeList.recipeGet().subscribe((ans) => {
      this.list = ans;
      console.log('List of rescipe ', ans);
    });
  }
}
