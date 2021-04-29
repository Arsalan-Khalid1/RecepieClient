import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingService {

  ingredientOnChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 15),
    new Ingredient('Mango', 10),
  ];

  ingredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientOnChanged.next(this.ingredients.slice());
  };

  getIngredients()
  {
    return this.ingredients.slice();
  };

  ingAdded(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientOnChanged.next(this.ingredients.slice());
  };
};
