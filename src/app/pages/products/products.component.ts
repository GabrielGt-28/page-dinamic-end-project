import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

interface Product {
  title: string;
  packages: any[];
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public product!: Product;
  public idProduct!: number;
  imagesAssets: string = 'assets/images/no-image.jpg';

  constructor(private ruta: ActivatedRoute, private service_: ProductsService) {
    this.ruta.params.subscribe((params) => {
      // console.log(params['id']);
      this.idProduct = params['id'];
      this.product = service_.getOne(params['id']);
      // console.log(this.product);
    });
  }
}
