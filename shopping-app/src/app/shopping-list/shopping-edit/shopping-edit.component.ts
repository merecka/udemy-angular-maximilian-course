import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput, { static: true}') ingredientNameInput: ElementRef;
  @ViewChild('amountInput, {static: true}') ingredientAmountInput: ElementRef;
  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addIngredient() {
    this.ingredientAdded.emit(
      new Ingredient(
        this.ingredientNameInput.nativeElement.value,
        this.ingredientAmountInput.nativeElement.value
      )
    );
  }
}
