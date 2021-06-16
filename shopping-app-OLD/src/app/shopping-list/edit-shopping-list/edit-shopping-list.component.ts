import { ShoppingListService } from "./../shopping-list.service";
import { Ingredient } from "./../../shared/ingredient.model";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-edit-shopping-list",
  templateUrl: "./edit-shopping-list.component.html",
  styleUrls: ["./edit-shopping-list.component.css"],
})
export class EditShoppingListComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient() {
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnInit(): void {}
}
