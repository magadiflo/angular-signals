import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [DecimalPipe, ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styles: ``
})
export class CrudComponent {

  private _productService = inject(ProductService);
  private _formBuilder = inject(NonNullableFormBuilder);

  public form: FormGroup = this._formBuilder.group({
    title: ['', [Validators.required]],
    price: [0, [Validators.required]],
    description: [''],
    image: [''],
    category: ['', [Validators.required]]
  });

  public products = toSignal(this._productService.getProducts(), { initialValue: [] });

  public save(): void {
    console.log(this.form.value);
  }

  public edit(product: Product): void {
    console.log('Editando producto ', product);
  }

  public remove(product: Product): void {
    console.log('Eliminando producto ', product);
  }

  public reset(): void {
    this.form.reset();
  }

}
