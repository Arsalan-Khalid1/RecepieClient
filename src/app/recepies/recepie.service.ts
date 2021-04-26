import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping-list.service";
import { Recepie } from "./recepie.model";

@Injectable()
export class RecipeSerive {

  private recipes: Recepie[] = [
    new Recepie(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recepie('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  recipeSelected = new EventEmitter<Recepie>();

  constructor(private slService: ShoppingService){};

  getRecipe(){
    return this.recipes.slice();
  };

  addIngToSl(ingredient: Ingredient[])
  {
    this.slService.ingAdded(ingredient);
  };

};
