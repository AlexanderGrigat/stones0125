import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stn-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Output() saveProduct = new EventEmitter<Product>();
  id = -1;

  // productForm = new FormGroup({
    // name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    // price: new FormControl(0, [Validators.required, CustomValidators.positiv]),
    // weight: new FormControl(0, [Validators.required]),
  // })

  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);

  constructor(){
    this.route.paramMap.subscribe(paramMap =>  {
      const id = paramMap.get('id');
      if (id){
        this.id = +id
      }
    })
  }

  productForm = this.fb.group({
    name: ['', [Validators.required, CustomValidators.alphaNum]],
    price: [0, [Validators.required, CustomValidators.positiv]],
    weight: [0, [Validators.required]],
  });

  save() {
    const formValue = this.productForm.value;
    if (this.productForm.valid && formValue.name && formValue.price && formValue.weight) {
      const product = new Product(
        this.id,
        formValue.name,
        formValue.price,
        formValue.weight
      );
      this.saveProduct.emit(product);
      this.productForm.reset();
    }
  }

  hasSave(){
    const formValue = this.productForm.value;

    if(!formValue.name && !formValue.price && !formValue.weight){
      return true
    }
    else{
      return confirm('Du hast ungespeicherte Daten, willst du wirklich weg?')
    }
  }
}
