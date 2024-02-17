import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.scss'
})
export default class RecipeFormComponent  {
  recipeFrom!:FormGroup;

  fb=inject(FormBuilder);
  recipeService = inject(RecipeService);


  ngOnInit(){
    this.recipeFromData();
  }

  recipeFromData(){

    this.recipeFrom=this.fb.group({
      title:[''],
      ingredients:[''],
      Steps:[''],
      category:[''],
      Tags:[''],
      Images:['']
    })
  }

  get ingredientsArray():FormArray{
    return this.recipeFrom?.get('ingredients') as FormArray;
  }

  addingredients():void {
    const optionIngredients = this.fb.group({
      ingredientName:[''],
    });

    this.ingredientsArray.push(optionIngredients);
  }

  removeIngredients(index:number) :void {
    this.ingredientsArray?.removeAt(index);
  }

  get StepsArray():FormArray{
    return this.recipeFrom?.get('Steps') as FormArray;
  }


  addSteps():void{
    const otionsSteps = this.fb.group({
      stepName:[''],
    });
    this.StepsArray.push(otionsSteps);
  }

  removeSteps(i:number):void{
  this.StepsArray?.removeAt(i);
  }

  get TagsArray():FormArray{
    return this.recipeFrom?.get('Tags') as FormArray;
  }



  addTags():void {
    const optionsTags = this.fb.group({
      tagName: [''],
    });
    this.TagsArray.push(optionsTags);
  }

  removeTags(i: number):void {
    this.TagsArray?.removeAt(i);
  }
  
  onsubmitRecipe(){
    // console.log(this.recipeFrom.value);
    
    this.recipeService.recipePost(this.recipeFrom.value).subscribe(
      (res=>{
        alert("Recipe Data Add Successfull")
        this.recipeFrom.reset();
      }),
      (error => {
        console.error(error);
        
      })
    )
  }

}
