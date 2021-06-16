import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Yummy Sushi",
      "Some nice fresh sushi",
      "https://www.fifteenspatulas.com/wp-content/uploads/2016/06/Homemade-Sushi-1.jpg",
      [new Ingredient("Fish", 1), new Ingredient("Rice", 1)]
    ),
    new Recipe(
      "Cheeseburger",
      "An amazing cheeseburger",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_hambugers1.jpg.rend.hgtvcom.616.462.suffix/1558017418187.jpeg",
      [new Ingredient("Fish", 1), new Ingredient("Rice", 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
