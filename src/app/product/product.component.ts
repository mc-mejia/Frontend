import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl'],
  providers:[ProductsService]
})
export class ProductComponent implements OnInit,OnDestroy {

  products:any=[]
   showHideImg: boolean=true;
   dataSubscription: any;

  constructor(private _productService: ProductsService) {
    
   }

  ngOnInit() {
    //this.products=this._productService.getProducts();//this is used when data is commming from angular
    this.dataSubscription=this._productService.getProducts().subscribe((data)=>{//this is used when data is comming from node
     this.products=data;
   })
  }
  ngOnDestroy(){
    this.dataSubscription.unsubscribe();
  }

  toggleImage(){
    this.showHideImg=!this.showHideImg;
  }

  receiveDataFromParent(value:string){
    alert(value);
  }
    

}
