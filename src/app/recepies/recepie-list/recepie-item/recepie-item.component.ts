import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from '../../recepie.model';
import { RecipeSerive } from '../../recepie.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recipe!: Recepie;
  constructor(private recipeService: RecipeSerive) {
  }

  ngOnInit(): void {
  }

  onClicked(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
