import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecipeSerive } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecipeSerive]
})
export class RecepiesComponent implements OnInit {
  recipeSelected!: Recepie;

  constructor(private recipeService: RecipeSerive) { };

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recepie) => {
      this.recipeSelected = recipe;
    });
  };

};
