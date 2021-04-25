import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recipe!: Recepie;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit(): void {
  }

  onClicked(){
    this.recipeSelected.emit();
  }

}
