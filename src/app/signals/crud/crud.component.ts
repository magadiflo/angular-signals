import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject } from '@angular/core';
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
  private readonly _destroyRef = inject(DestroyRef);

  public form: FormGroup = this._formBuilder.group({
    title: ['', [Validators.required]],
    price: [0, [Validators.required]],
    description: [''],
    image: [''],
    category: ['', [Validators.required]]
  });

  public products = toSignal(this._productService.getProducts(), { initialValue: [] as Product[] });

  public save(): void {
    if (this.form.invalid) return;

    this._productService.addProduct(this.form.value)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(product => {
        console.log('Saved Product: ', product);
      });
  }

  public edit(product: Product): void {
    this._productService.updateProduct(product.id, product)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(product => {
        console.log('Edited product: ', product);
      });
  }

  public remove(product: Product): void {
    this._productService.deleteProduct(product.id)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(resp => {
        console.log('Deleted product: ', resp);
      });
  }

  public reset(): void {
    this.form.reset();
  }

}
