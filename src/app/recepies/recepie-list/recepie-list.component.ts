import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recipes: Recepie[] = [
    new Recepie(' Recipe', 'Best Turkey Sandwich', 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/foodservice/desktop%20images/2019_com_alfredo-dijon-turkey-sandwich_900x600.jpg?ext=.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
