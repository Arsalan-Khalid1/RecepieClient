import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  recipes = [];

  constructor() { }

  ngOnInit(): void {
  }

}
