import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerBeneficiary } from './customer-beneficiary';

@Injectable({
  providedIn: 'root'
})
export class CustomerBeneficiaryService {


  private userURL:string;
  private baseUrl='http://localhost:9091/api/';

  constructor(private _http: HttpClient) {
    this.userURL = 'http://localhost:8080/customer/${customerId}/beneficiary';
    this.baseUrl = 'http://localhost:8080/api';
   }

   createBeneficiary(customerBeneficiary: object): Observable<any>{
    return this._http.post<CustomerBeneficiary>(this.userURL, customerBeneficiary);
   }

   deleteBeneficiary(customerId: number, beneficiaryId : number) {
    //return  this._http.delete("http://localhost:8080/customer/${customerId}/beneficiary");
    return this._http.delete(`${this.baseUrl+"/customer"}/${customerId}/beneficiary/${beneficiaryId}`, { responseType: 'text' });
  }

   
   getCustomerBeneficiaries(customerId: number): Observable<any> {
    return this._http.get(`${this.baseUrl+"/customer"}/${customerId}/beneficiary`, { responseType: 'text' });
  }


  // getCustomerBeneficiaries(customerID : number): Observable<any>{
  // /*this._http.get("http://localhost:3000/getproducts").subscribe((data)=>{
  //  console.log(data);
  //  return data;
  // }); */
  //  return this._http.get('http://localhost:8080/customer/${customerID}/beneficiary');
  //   /*return [
  //     {
  //       "beneficiary_id":1,
  //       "account_no": 6,
  //       "approval": "1",
  //       "date_of_approval": "1999-12-12",
  //       "cust_ben_con": 6,
  //     }]
      
  //     {
  //       "productId":2,
  //       "productName": "Cooking",
  //       "productCode": "GDN-001",
  //       "releaseDate": "March 19,2016",
  //       "description": "Leaf rank with 48-inch wooden handle",
  //       "price": 500,
  //       "starRating": 4.2,
  //       "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
  
  //     },
  //     {
  //       "productId":3,
  //       "productName": "Fooding",
  //       "productCode": "GDN-001",
  //       "releaseDate": "March 19,2016",
  //       "description": "Leaf rank with 48-inch wooden handle",
  //       "price": 500,
  //       "starRating": 3.8,
  //       "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
  
  //     },
  //     {
  //       "productId":4,
  //       "productName": "Hummer",
  //       "productCode": "GDN-001",
  //       "releaseDate": "March 19,2016",
  //       "description": "Leaf rank with 48-inch wooden handle",
  //       "price": 500,
  //       "starRating": 4.8,
  //       "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
  
  //     }
  //   ] */
  // }
}

