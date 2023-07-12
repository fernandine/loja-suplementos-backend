import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {

  bestSellers: Product[] = [];
  mostRecents: Product[] = [];
  feature: Product[] = [];
  sale: Product[] = [];

  active4: number = 0;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  this.productService.getBestSellers(6).subscribe(products => {
      this.bestSellers = products;
    }, error => {
        console.error('Erro ao buscar os mais vendidos', error);
    });

  this.productService.getMostRecents(6).subscribe(products => {
    this.mostRecents = products;
  }, error => {
      console.error('Erro ao buscar os produtos mais recentes', error);
  });

  this.productService.findByFeature(true).subscribe(products => {
    this.feature = products;
  }, error => {
      console.error('Erro ao buscar os produtos em destaque', error);
  });

  this.productService.findBySale(true).subscribe(products => {
    this.sale = products;
  }, error => {
      console.error('Erro ao buscar os produtos em promoção', error);
  });

}

}
