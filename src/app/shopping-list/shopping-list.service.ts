import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingService {

  ingredientOnChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 15),
    new Ingredient('Mango', 10),
  ];

  ingredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientOnChanged.emit(this.ingredients.slice());
  };

  getIngredients()
  {
    return this.ingredients.slice();
  };

  ingAdded(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientOnChanged.emit(this.ingredients.slice());
  };
};
