import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recepie } from '../recepie.model';
import { RecipeSerive } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  recipe!: Recepie;
  id!: number;
  ingredient!: Ingredient;

  constructor(private rService: RecipeSerive, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.rService.getRecipeId(this.id);
    });
  }

  toShoppingList(){
    this.rService.addIngToSl(this.recipe.ingredients);
  };

  onEditRecipe() {
    this.router.navigate(['edit'],{relativeTo: this.route});
  };

}
