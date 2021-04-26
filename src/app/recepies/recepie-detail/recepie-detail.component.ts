import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recepie } from '../recepie.model';
import { RecipeSerive } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  @Input() recipe!: Recepie;

  ingredient!: Ingredient;

  constructor(private rService: RecipeSerive) { }

  ngOnInit(): void {
  }

  toShoppingList(){
    this.rService.addIngToSl(this.recipe.ingredients);
  };

}
