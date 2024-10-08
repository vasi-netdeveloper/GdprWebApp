import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../Interfaces/product';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css'
})
export class ProductsFormComponent {
  
  formBuilder = inject(FormBuilder);
 
  productForm = this.formBuilder.group({
    id:[''],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: [0, [Validators.required]],
    stock: [0, [Validators.required]],
  });
  productId!: string;
  isEdit = false;

  constructor(
    private apiService: ApiService,
    private router : Router,
    private route : ActivatedRoute
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.isEdit = true;

      this.apiService.getProduct(this.productId).subscribe({
        next:(result : any) => {
          console.log(result);
          this.productForm.patchValue(result);
        },
        error: (err : any) => {
          console.log(err);
  
        },
        complete: () => {},
      });
    }
  }

  save() {
    console.log(this.productForm.value);
    const product: IProduct = {
      id: this.productForm.value.id!,
      name: this.productForm.value.name!,
      description : this.productForm.value.description!,
      price: this.productForm.value.price!,
      stock:  this.productForm.value.stock!
    };

    if (this.isEdit) {
      this.apiService.updateProduct(this.productId, product)
        .subscribe(() => {
          console.log('success');
          this.router.navigateByUrl('/products-list');
        });
    } else {
      this.apiService.createProduct(product).subscribe(() => {
        console.log('success');
        this.router.navigateByUrl('/products-list');
      });
    }
  }
}