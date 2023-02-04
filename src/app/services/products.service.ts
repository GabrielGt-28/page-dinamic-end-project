import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/index';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: ProductInterface[] = [
    {
      title: 'Paquetes de Internet',
      typeCatalog: 'package-int',
      catalogId: 1,
      packages: [
        {
          title: 'Producto 1',
          image: '',
          detail: 'Paquete de 3 GB',
          price: '10.00',
        },
        {
          title: 'Producto 2',
          image: 'https://cdn-icons-png.flaticon.com/512/59/59842.png',
          detail: 'Paquete de 10 GB',
          price: '25.00',
        },
        {
          title: 'Producto 3',
          image:
            'https://www.shutterstock.com/image-illustration/ultra-pack-green-letters-20gb-260nw-1353253220.jpg',
          detail: 'Paquete de 20 GB',
          price: '50.00',
        },
      ],
    },
    {
      title: 'Redes Sociales',
      typeCatalog: 'new-red-social',
      catalogId: 2,
      packages: [
        {
          title: 'Producto 1',
          image:
            'https://media.revistagq.com/photos/5d47ea7f3b83c000083d3cc9/master/pass/instagram%20whatsapp%20nombre%20facebook.jpg',
          detail: 'Facebook, Instagram y Whatsapp.',
          price: '50.00',
        },
        {
          title: 'Producto 2',
          image:
            'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/05/19/861758-tiktok-youtube.jpg',
          detail: 'Youtube, Twitter y TikTok.',
          price: '50.00',
        },
        {
          title: 'Producto 3',
          image: 'https://i.blogs.es/6efe33/netflix-amazon/1366_2000.jpg',
          detail: 'Todo Videos Netflix y Amazon Prime',
          price: '50.00',
        },
      ],
    },
    {
      title: 'Recargas',
      typeCatalog: 'new-recarga',
      catalogId: 3,
      packages: [
        {
          title: 'Producto 1',
          image: '',
          detail: 'Recarga de S/. 10.00',
          price: '10.00',
        },
        {
          title: 'Producto 2',
          image: '',
          detail: 'Recarga de S/. 20.00',
          price: '20.00',
        },
        {
          title: 'Producto 3',
          image: '',
          detail: 'Recarga de S/. 50.00',
          price: '50.00',
        },
      ],
    },
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
  getOne(i: number) {
    return this.products[i];
  }

  getPackages(i: number, idPackage: number) {
    return this.products[i].packages[idPackage];
  }
}
