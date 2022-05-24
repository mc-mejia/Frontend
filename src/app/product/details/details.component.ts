import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl']
})
export class DetailsComponent implements OnInit {
   
     productCode:number;
     releaseDate:string
    // starRating:number
     price:number
  constructor(private _activatedRoute: ActivatedRoute,private _router:Router) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe((data)=>{
      this.productCode=data.pId;
      this.releaseDate=data.releaseDate;
     //this.starRating=data.starRating;
     this.price=data.price;
      console.log(data);
    });
  }

  backToList(){
 this._router.navigate(['/product']);
  }

}
