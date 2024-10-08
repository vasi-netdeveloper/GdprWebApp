import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/product';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule, RouterLink, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: IProduct[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'stock',
    'action',
  ];

  constructor(
    private apiService: ApiService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.fetchProductsHandler();
  }

  private fetchProductsHandler(): void {

    this.apiService.getAllProducts().subscribe({
      next:(result : any) => {
        this.productList = result;
        console.log(this.productList);
      },
      error: (err : any) => {
        console.log(err);

      },
      complete: () => {},
    });
  }

  edit(id: string) {
    console.log(id);
    this.router.navigateByUrl('/product/' + id);
  }
  delete(id: string) {
    this.apiService.deleteProduct(id).subscribe(() => {
      console.log('deleted');
      this.fetchProductsHandler();
    });
  }

}
