import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecipeSerive } from '../recepie.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recipes!: Recepie[];
  constructor(private recipeService: RecipeSerive) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

}
