import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }
  getProducts(){
  /*this._http.get("http://localhost:3000/getproducts").subscribe((data)=>{
   console.log(data);
   return data;
  }); */
   return  this._http.get("http://localhost:3000/getproducts");
    /*return [
      {
        "productId":1,
        "productName": "Leaf Rake",
        "productCode": "GDN-001",
        "releaseDate": "March 19,2016",
        "description": "Leaf rank with 48-inch wooden handle",
        "price": 500,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
  
      },
      {
        "productId":2,
        "productName": "Cooking",
        "productCode": "GDN-001",
        "releaseDate": "March 19,2016",
        "description": "Leaf rank with 48-inch wooden handle",
        "price": 500,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
  
      },
      {
        "productId":3,
        "productName": "Fooding",
        "productCode": "GDN-001",
        "releaseDate": "March 19,2016",
        "description": "Leaf rank with 48-inch wooden handle",
        "price": 500,
        "starRating": 3.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
  
      },
      {
        "productId":4,
        "productName": "Hummer",
        "productCode": "GDN-001",
        "releaseDate": "March 19,2016",
        "description": "Leaf rank with 48-inch wooden handle",
        "price": 500,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
  
      }
    ] */
  }
}
