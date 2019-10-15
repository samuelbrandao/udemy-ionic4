import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1zn_9nQe-1Dg22PFK670s8MaiNUM_Qwynot9_D-XU1sDCNV4',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://photos.bigoven.com/recipe/hero/spaghetti-f48f9b.jpg?h=300&w=300',
      ingredients: ['Spaghetti', 'Meat', 'Tomattoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
}
